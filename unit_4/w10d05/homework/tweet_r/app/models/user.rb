class User
  DB = PG.connect({
    :host => 'localhost',
    :port => 5432,
    :dbname => 'tweet_r'
    })

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          users.*,
          tweets.id AS tweet_id,
          tweets.tweet_content,
          tweets.user_id
        FROM users
        LEFT JOIN tweets
          ON users.id = tweets.user_id
        ORDER BY users.id;
      SQL
    )
    users = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        users.push({
          "id" => result["id"].to_i,
          "user_name" => result["user_name"],
          "password" => result["password"],
          "tweets" => []
        })
        last_id = result["id"]
      end
      if result["tweet_id"]
        users.last["tweets"].push({
          "id" => result["tweet_id"].to_i,
          "tweet_content" => result["tweet_content"],
          "user_id" => result["user_id"].to_i
        })
      end
    end
    return users
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          users.*,
          tweets.id AS tweet_id,
          tweets.tweet_content
        FROM users
        LEFT JOIN tweets
          ON users.id = tweets.user_id
        WHERE users.id = #{id};
      SQL
    )
    tweets = []
    results.each do |result|
      if result["tweet_id"]
        tweets.push({
          "id" => result["tweet_id"].to_i,
          "tweet_content" => result["tweet_content"]
        })
      end
    end
    return {
      "id" => results.first["id"].to_i,
      "user_name" => results.first["user_name"],
      "password" => results.first["password"],
      "tweets" => tweets
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO users (user_name, password)
        VALUES ( '#{opts["user_name"]}', '#{opts["password"]}' )
        RETURNING id, user_name, password;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "user_name" => results["user_name"],
      "password" => results["password"]
    }
  end

  def self.delete(id)
    results = DB.exec(
      <<-SQL
        DELETE FROM users WHERE id = #{id};
      SQL
    )
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE users
        SET user_name = '#{opts["user_name"]}',
            password = '#{opts["password"]}'
        WHERE id = #{id}
        RETURNING id, user_name, password;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "user_name" => results["user_name"],
      "password" => results["password"]
    }
  end
end
