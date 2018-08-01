class User
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'instaphoto'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT * FROM users;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "username" => result["username"]
      }
    end
  end

  def self.find(id)
    result = DB.exec(
      <<-SQL
        SELECT
          *
        FROM users
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => result["id"].to_i,
      "username" => result["username"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO users (username)
        VALUES ( '#{opts["username"]}')
        RETURNING id, username;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "username" => results["username"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM users WHERE id = #{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE users
        SET username = '#{opts["username"]}'
        WHERE id = #{id}
        RETURNING id, username;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "username" => results["username"]
    }
  end
end
