class Company
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'contacts_development'})

  def self.all
    results = DB.exec(
      <<-SQL
          SELECT
            companies.*,
            people.id AS person_id,
            people.name AS person_name,
            people.age
          FROM companies
          LEFT JOIN jobs
            ON companies.id = jobs.company_id
          LEFT JOIN people
            ON jobs.person_id = people.id
          ORDER BY companies.id ASC;
        SQL
    )
    companies = []
    last_company_id = nil
    results.each do |result|
      # if !(companies.any? { |x| x["id"].to_i == result["id"].to_i })
      if result["id"] != last_company_id
        company = {
          "id" => result["id"].to_i,
          "name" => result["name"],
          "industry" => result["industry"],
          "employees" => []
        }
        companies.push(company)
        last_company_id = result["id"]
      end
      if result["person_id"]
        companies.last["employees"].push({
          "id" => result["person_id"].to_i,
          "name" => result["person_name"],
          "age" => result["age"].to_i
          })
      end
    end

    return companies
  end

  def self.find(id)
      results = DB.exec(<<-SQL
              SELECT
                  companies.*,
                  people.id AS person_id, -- alias people.id
                  people.name AS person_name, -- alias people.name
                  people.age -- get people.age
              FROM companies
              LEFT JOIN jobs -- add jobs table
                  ON companies.id = jobs.company_id
              LEFT JOIN people -- add people table
                  ON jobs.person_id = people.id
              WHERE companies.id=#{id}; -- specify companies.id, not id
          SQL
      )
      employees = []; # create an array to store employees
      results.each do |result| # for each row
          if result["person_id"] # check if people.id exists
              employees.push({ # if it does, create a new person and add it to the employees array
                  "id" => result["person_id"].to_i,
                  "name" => result["person_name"],
                  "age" => result["age"].to_i
              })
          end
      end
      return {
          "id" => results.first["id"].to_i,
          "name" => results.first["name"],
          "industry" => results.first["industry"],
          "employees" => employees # add employees array
      }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO companies (name, industry)
        VALUEs ( '#{opts["name"]}', '#{opts["industry"]}')
        RETURNING id, name, industry;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "industry" => results["industry"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM companies WHERE id=#{id};")
    return { "Deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE companies
        SET name='#{opts["name"]}', industry='#{opts["industry"]}'
        WHERE id=#{id}
        RETURNING id, name, industry
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "industry" => results["industry"]
    }
  end

end
