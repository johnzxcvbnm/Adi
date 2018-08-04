class Person
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'contacts_development' })

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          people.*,
          locations.street,
          locations.city,
          locations.state,
          companies.id AS company_id,
          companies.name as company,
          companies.industry
        FROM people
        LEFT JOIN locations
          ON people.home_id = locations.id
        LEFT JOIN jobs
          ON people.id = jobs.person_id
        LEFT JOIN companies
          ON jobs.company_id = companies.id
        ORDER BY people.id ASC;
      SQL
    )
    people = []
    last_person_id = nil
    results.each do |result|
      if result["id"] != last_person_id
        if result["home_id"]
          home = {
            "id" => result["home_id"].to_i,
            "street" => result["street"],
            "city" => result["city"],
            "state" => result["state"]
          }
        end
        new_person = {
          "id" => result["id"].to_i,
          "name" => result["name"],
          "age" => result["age"].to_i,
          "home" => home,
          "employers" => []
        }
        people.push(new_person)
        last_person_id = result["id"]
      end
      if result["company_id"]
        employer = {
          "id" => result["company_id"].to_i,
          "name" => result["company"],
          "industry" => result["industry"]
        }
        people.last["employers"].push(employer)
      end
    end
    return people
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          people.*,
          locations.street,
          locations.city,
          locations.state,
          companies.id AS company_id,
          companies.name AS company,
          companies.industry
        FROM people
        LEFT JOIN locations
          ON people.home_id = locations.id
        LEFT JOIN jobs
          ON people.id = jobs.person_id
        LEFT JOIN companies
          ON jobs.company_id = companies.id
        WHERE people.id=#{id};
      SQL
    )
    result = results.first
    if result["home_id"]
      home = {
        "id" => result["home_id"].to_i,
        "street" => result["street"],
        "city" => result["city"],
        "state" => result["state"]
      }
    end
    employers = []
    results.each do |result|
      if result["company_id"]
        employers.push({
          "id" => result["company_id"].to_i,
          "name" => result["company"],
          "idustry" => result["industry"]
        })
      end
    end

    return {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "age" => result["age"].to_i,
        "home" => home,
        "employers" => employers
      }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO people (name, age, home_id)
        VALUES ( '#{opts["name"]}', #{opts["age"]}, #{opts["home_id"] ? opts["home_id"] : "NULL" } )
        RETURNING id, name, age, home_id;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "age" => results.first["age"],
      "home_id" => results.first["home_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM people WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE people
        SET name='#{opts["name"]}', age=#{opts["age"]}, home_id=#{opts["home_id"] ? opts["home_id"] : "NULL" }
        WHERE id=#{id}
        RETURNING id, name, age, home_id;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "age" => results.first["age"].to_i,
      "home_id" => results.first["home_id"].to_i
    }
  end
end
