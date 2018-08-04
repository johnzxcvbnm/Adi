class Scientist
  DB = PG.connect({
    :host => "localhost",
    :port => 5432,
    :dbname => 'enemies_development'
    })


  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          scientists.*,
          links.superhero_id,
          superheros.name AS superhero_name,
          superheros.battlecry
        FROM scientists
        LEFT JOIN links
          ON scientists.id = links.scientist_id
        LEFT JOIN superheros
          ON links.superhero_id = superheros.id
        ORDER BY scientists.id ASC;
      SQL
    )
    scientists = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        scientists.push({
          "id" => result["id"].to_i,
          "name" => result["name"],
          "lair_type" => result["lair_type"],
          "superheros" => []
        })
      end
      last_id = result["id"]
      if result["superhero_id"]
        scientists.last["superheros"].push({
          "id" => result["superhero_id"].to_i,
          "name" => result["superhero_name"],
          "battlecry" => result["battlecry"]
        })
      end
    end
    return scientists
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          scientists.*,
          links.superhero_id,
          superheros.name AS superhero_name,
          superheros.battlecry
        FROM scientists
        LEFT JOIN links
          ON scientists.id = links.scientist_id
        LEFT JOIN superheros
          ON links.superhero_id = superheros.id
        WHERE scientists.id = #{id};
      SQL
    )
    superheros = []
    results.each do |result|
      if result["superhero_id"]
        superheros.push({
          "id" => result["superhero_id"].to_i,
          "name" => result["superhero_name"],
          "battlecry" => result["battlecry"]
        })
      end
    end
    return {
        "id" => results.first["id"],
        "name" => results.first["name"],
        "lair_type" => results.first["lair_type"],
        "superheros" => superheros
      }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO scientists (name, lair_type)
        VALUES ('#{opts["name"]}', '#{opts["lair_type"]}')
        RETURNING id, name, lair_type
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "lair_type" => result["lair_type"]
    }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE scientists
        SET name='#{opts['name']}', lair_type='#{opts["lair_type"]}'
        WHERE id=#{id}
        RETURNING id, name, lair_type
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "lair_type" => result["lair_type"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM scientists WHERE id=#{id};")
    p "RESULTS ", results
    return { "deleted" => true }
  end
end
