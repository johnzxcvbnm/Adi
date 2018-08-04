class Link
  DB = PG.connect({
    :host => "localhost",
    :port => 5432,
    :dbname => "enemies_development"
    })

  def self.all
    results = DB.exec( "SELECT * FROM links;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "superhero_id" => result["superhero_id"].to_i,
        "scientist_id" => result["scientist_id"].to_i
      }
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM links WHERE id = #{id};")
    result = results.first
    return {
      "id" => result["id"].to_i,
      "superhero_id" => result["superhero_id"].to_i,
      "scientist_id" => result["scientist_id"].to_i
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO links (superhero_id, scientist_id)
        VALUES ( #{opts["superhero_id"]}, #{opts["scientist_id"]} )
        RETURNING id, superhero_id, scientist_id;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "superhero_id" => result["superhero_id"].to_i,
      "scientist_id" => result["scientist_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM links WHERE id = #{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE links
        SET superhero_id = #{opts["superhero_id"]},
            scientist_id = #{opts["scientist_id"]}
        WHERE id = #{id}
        RETURNING id, superhero_id, scientist_id;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "superhero_id" => result["superhero_id"].to_i,
      "scientist_id" => result["scientist_id"].to_i
    }
  end
end
