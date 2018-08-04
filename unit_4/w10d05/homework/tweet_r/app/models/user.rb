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
          *
        FROM users;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "user_name" => result["user_name"],
        "password" => result["password"]
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM users
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "user_name" => results["user_name"],
      "password" => results["password"]
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
