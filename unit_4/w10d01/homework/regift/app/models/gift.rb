class Gift
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'regift_development'})

  def self.all
    results = DB.exec("SELECT * FROM gifts;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "value" => result["value"].to_i,
        "holiday" => result["holiday"],
        "got_from" => result["got_from"]
      }
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM gifts WHERE id=#{id};").first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "value" => results["value"].to_i,
      "holiday" => results["holiday"],
      "got_from" => results["got_from"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO gifts (name, value, holiday, got_from)
        VALUES ( '#{opts["name"]}', #{opts["value"]}, '#{opts["holiday"]}', '#{opts["got_from"]}')
        RETURNING id, name, value, holiday, got_from;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "value" => results["value"].to_i,
      "holiday" => results["holiday"],
      "got_from" => results["got_from"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM gifts WHERE id=#{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE gifts
        SET name='#{opts["name"]}', value=#{opts["value"]}, holiday='#{opts["holiday"]}', got_from='#{opts["got_from"]}'
        WHERE id=#{id}
        RETURNING id, name, value, holiday, got_from;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "value" => results["value"].to_i,
      "holiday" => results["holiday"],
      "got_from" => results["got_from"]
    }
  end

  def self.random
    results = DB.exec("SELECT * FROM gifts;").to_a.sample
    return {
        "id" => results["id"].to_i,
        "name" => results["name"],
        "value" => results["value"].to_i,
        "holiday" => results["holiday"],
        "got_from" => results["got_from"]
      }
  end
 
end
