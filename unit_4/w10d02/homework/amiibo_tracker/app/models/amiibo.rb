class Amiibo
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'amiibo_tracker_development'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          amiibos.*,
          games.game_name,
          games.image AS game_image
        FROM amiibos
        LEFT JOIN games
          ON amiibos.game_id = games.id;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "character_name" => result["character_name"],
        # "game_id" => result["game_id"].to_i,
        "image" => result["image"],
        "has_been_released" => (result["has_been_released"] == 't') ? "True" : "False",
        "game_name" => result["game_name"],
        "game_image" => result["game_image"]
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          amiibos.*,
          games.game_name,
          games.image AS game_image
        FROM amiibos
        LEFT JOIN games
          ON amiibos.game_id = games.id
        WHERE amiibos.id=#{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "character_name" => results["character_name"],
      "game_id" => results["game_id"].to_i,
      "image" => results["image"],
      "has_been_released" => (results["has_been_released"] == 't') ? "True" : "False",
      "game_name" => results["game_name"],
      "game_image" => results["game_image"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO amiibos (character_name, game_id, image, has_been_released)
        VALUES ('#{opts["character_name"]}', #{opts["game_id"]}, '#{opts["image"]}', #{opts["has_been_released"]})
        RETURNING id, character_name, game_id, image, has_been_released;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "character_name" => results["character_name"],
      "game_id" => results["game_id"].to_i,
      "image" => results["image"],
      "has_been_released" => (results["has_been_released"] == 't') ? "True" : "False"
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM amiibos WHERE id = #{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE amiibos
        SET character_name='#{opts["character_name"]}', game_id=#{opts["game_id"]}, image='#{opts["image"]}', has_been_released=#{opts["has_been_released"]}
        WHERE id=#{id}
        RETURNING id, character_name, game_id, image, has_been_released;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "character_name" => results["character_name"],
      "game_id" => results["game_id"].to_i,
      "image" => results["image"],
      "has_been_released" => (results["has_been_released"] == 't') ? "True" : "False"
    }
  end
end
