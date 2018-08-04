class Superhero
  DB = PG.connect({
    :host => "localhost",
    :port => 5432,
    :dbname => 'enemies_development'
    })


  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          superheros.*,
          links.scientist_id,
          scientists.name AS scientist_name,
          scientists.lair_type
        FROM superheros
        LEFT JOIN links
          ON superheros.id = links.superhero_id
        LEFT JOIN scientists
          ON links.scientist_id = scientists.id
        ORDER BY superheros.id ASC;
      SQL
    )
    superheros = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        superheros.push({
          "id" => result["id"].to_i,
          "name" => result["name"],
          "battlecry" => result["battlecry"],
          "scientists" => []
        })
        last_id = result["id"]
      end
      if result["scientist_id"]
        superheros.last["scientists"].push({
          "id" => result["scientist_id"].to_i,
          "name" => result["scientist_name"],
          "lair_type" => result["lair_type"]
        })
      end
    end
    return superheros
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          superheros.*,
          links.scientist_id,
          scientists.name AS scientist_name,
          scientists.lair_type
        FROM superheros
        LEFT JOIN links
          ON superheros.id = links.superhero_id
        LEFT JOIN scientists
          ON links.scientist_id = scientists.id
        WHERE superheros.id = #{id};
      SQL
    )
    scientists = []
    results.each do |result|
      if result["scientist_id"]
        scientists.push({
          "id" => result["scientist_id"].to_i,
          "name" => result["scientist_name"],
          "lair_type" => result["lair_type"]
        })
      end
    end
    return {
        "id" => results.first["id"],
        "name" => results.first["name"],
        "battlecry" => results.first["battlecry"],
        "scientists" => scientists
      }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO superheros (name, battlecry)
        VALUES ('#{opts["name"]}', '#{opts["battlecry"]}')
        RETURNING id, name, battlecry
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "battlecry" => result["battlecry"]
    }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE superheros
        SET name='#{opts['name']}', battlecry='#{opts["battlecry"]}'
        WHERE id=#{id}
        RETURNING id, name, battlecry
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "battlecry" => result["battlecry"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM superheros WHERE id=#{id};")
    p "RESULTS ", results
    return { "deleted" => true }
  end
end
