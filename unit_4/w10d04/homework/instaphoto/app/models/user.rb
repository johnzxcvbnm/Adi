class User
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'instaphoto'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          users.*,
          photos.id AS photo_id,
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
    users = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        users.push({
          "id" => result["id"].to_i,
          "username" => result["username"],
          "photos" => []
        })
        last_id = result["id"]
      end
      if result["photo_id"]
        users.last["photos"].push({
          "id" => result["photo_id"].to_i,
          "img_url" => result["img_url"],
          "caption" => result["caption"],
          "likes" => result["likes"].to_i,
          "date" => result["date"].to_date
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
          photos.id AS photo_id,
          photos.img_url,
          photos.caption,
          photos.likes,
          photos.date
        FROM users
        LEFT JOIN photos
          ON users.id = photos.user_id
        WHERE users.id = #{id};
      SQL
    )
    photos = []
    results.each do |result|
      if result["photo_id"]
        photos.push({
          "id" => result["photo_id"].to_i,
          "img_url" => result["img_url"],
          "caption" => result["caption"],
          "likes" => result["likes"].to_i,
          "date" => result["date"].to_date
        })
      end
    end
    return {
      "id" => results.first["id"].to_i,
      "username" => results.first["username"],
      "photos" => photos
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
