class User
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'instaphoto'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          users.*,
          -- photos
          photos.img_url,
          photos.caption,
          photos.likes,
          photos.date
        FROM users
        LEFT JOIN photos
          ON users.id = photos.user_id
        ORDER BY users.id ASC;
      SQL
    )
    photos = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        photos.push(
          {
            "id" => result["id"].to_i,
            "img_url" => result["img_url"],
            "caption" => result["caption"],
            "likes" => result["likes"].to_i,
            "date" => result["date"].to_date
          }
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
