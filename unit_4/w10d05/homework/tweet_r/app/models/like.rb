class Like
  DB = PG.connect({
    :host => 'localhost',
    :port => 5432,
    :dbname => 'tweet_r'
    })

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM likes;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "tweet_id" => result["tweet_id"].to_i,
        "user_id" => result["user_id"].to_i
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM likes
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "tweet_id" => results["tweet_id"].to_i,
      "user_id" => results["user_id"].to_i
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO likes (tweet_id, user_id)
        VALUES ( #{opts["tweet_id"]}, #{opts["user_id"]} )
        RETURNING id, tweet_id, user_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "tweet_id" => results["tweet_id"].to_i,
      "user_id" => results["user_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec(
      <<-SQL
        DELETE FROM likes
        WHERE id = #{id};
      SQL
    )
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE likes
        SET tweet_id = #{opts["tweet_id"]},
            user_id = #{opts["user_id"]}
        WHERE id = #{id}
        RETURNING id, tweet_id, user_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "tweet_id" => results["tweet_id"].to_i,
      "user_id" => results["user_id"].to_i
    }
  end
end
