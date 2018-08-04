class Tweet
  DB = PG.connect({
    :host => 'localhost',
    :port => 5432,
    :dbname => 'tweet_r'
    })

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM tweets;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "tweet_content" => result["tweet_content"],
        "user_id" => result["user_id"].to_i
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM tweets
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "tweet_content" => results["tweet_content"],
      "user_id" => results["user_id"].to_i
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO tweets (tweet_content, user_id)
        VALUES ( '#{opts["tweet_content"]}', #{opts["user_id"]} )
        RETURNING id, tweet_content, user_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "tweet_content" => results["tweet_content"],
      "user_id" => results["user_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec(
      <<-SQL
        DELETE FROM tweets
        WHERE id = #{id};
      SQL
    )
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE tweets
        SET tweet_content = '#{opts["tweet_content"]}',
            user_id = #{opts["user_id"]}
        WHERE id = #{id}
        RETURNING id, tweet_content, user_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "tweet_content" => results["tweet_content"],
      "user_id" => results["user_id"].to_i
    }
  end
end
