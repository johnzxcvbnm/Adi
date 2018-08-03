class Photo
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'instaphoto'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          photos.*,
          tags.comment,
          users.id AS user_id,
          username
        FROM photos
        LEFT JOIN tags
          ON photos.id = tags.photo_id
        LEFT JOIN users
          ON tags.user_id = users.id
        ORDER BY photos.id ASC;
      SQL
    )
    photos = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        photos.push({
          "id" => result["id"].to_i,
          "img_url" => result["img_url"],
          "caption" => result["caption"],
          "likes" => result["likes"].to_i,
          "date" => result["date"].to_date,
          "users" => []
          })
        last_id = result["id"]
      end
      if result["user_id"]
        photos.last["users"].push({
          "id" => result["user_id"].to_i,
          "user_name" => result["username"],
          "comment" => result["comment"]
          })
      end
    end
    return photos
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          photos.*,
          tags.comment,
          users.id AS user_id,
          username
        FROM photos
        LEFT JOIN tags
          ON photos.id = tags.photo_id
        LEFT JOIN users
          ON users.id = tags.user_id
        WHERE photos.id = #{id};
      SQL
    )
    users = []
    results.each do |result|
      if result["user_id"]
        users.push({
          "id" => result["user_id"].to_i,
          "user_name" => result["username"],
          "comment" => result["comment"]
          })
      end
    end
    return {
      "id" => results.first["id"].to_i,
      "img_url" => results.first["img_url"],
      "caption" => results.first["caption"],
      "likes" => results.first["likes"].to_i,
      "date" => results.first["date"].to_date,
      "users" => users
    }
  end

  def self.create(opts)
    result = DB.exec(
      <<-SQL
        INSERT INTO photos (img_url, caption, likes, date, user_id)
        VALUES ( '#{opts["img_url"]}', '#{opts["caption"]}', #{opts["likes"]}, '#{opts["date"]}', #{opts["user_id"]})
        RETURNING id, img_url, caption, likes, date, user_id;
      SQL
    ).first
    return {
      "id" => result["id"].to_i,
      "img_url" => result["img_url"],
      "caption" => result["caption"],
      "likes" => result["likes"].to_i,
      "date" => result["date"].to_date,
      "user_id" => result["user_id"].to_i
    }
  end

  def self.delete(id)
    result = DB.exec("DELETE FROM photos WHERE id = #{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    result = DB.exec(
      <<-SQL
        UPDATE photos
        SET img_url = '#{opts["img_url"]}',
            caption = '#{opts["caption"]}',
            likes = #{opts["likes"]},
            date = '#{opts["date"]}',
            user_id = #{opts["user_id"]}
        WHERE id = #{id}
        RETURNING id, img_url, caption, likes, date, user_id;
      SQL
    ).first
    return {
      "id" => result["id"].to_i,
      "img_url" => result["img_url"],
      "caption" => result["caption"],
      "likes" => result["likes"].to_i,
      "date" => result["date"].to_date,
      "user_id" => result["user_id"].to_i
    }
  end
end
