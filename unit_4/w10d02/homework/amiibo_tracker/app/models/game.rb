class Game
  DB = PG.connect({:host=>"localhost", :port => 5432, :dbname => "amiibo_tracker_development"})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          *
        FROM games;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "game_name" => result["game_name"],
        "image" => result["image"],
        "has_been_released" => (result["has_been_released"] == 't') ? "True" : "False"
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          *
        FROM games
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "game_name" => results["game_name"],
      "image" => results["image"],
      "has_been_released" => (results["has_been_released"] == 't') ? "True" : "False"
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO games (game_name, image, has_been_released)
        VALUES ( '#{opts["game_name"]}', '#{opts["image"]}', #{opts["has_been_released"]})
        RETURNING id, game_name, image, has_been_released;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "game_name" => results["game_name"],
      "image" => results["image"],
      "has_been_released" => (results["has_been_released"] == 't') ? "True" : "False"
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM games WHERE id=#{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE games
        SET game_name='#{opts["game_name"]}', image='#{opts["image"]}', has_been_released=#{opts["has_been_released"]}
        WHERE id=#{id}
        RETURNING id, game_name, image, has_been_released;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "game_name" => results["game_name"],
      "image" => results["image"],
      "has_been_released" => (results["has_been_released"] == 't') ? "True" : "False"
    }
  end
end
