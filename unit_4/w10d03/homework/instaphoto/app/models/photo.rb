class Photo
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'instaphoto'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT * FROM photos;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "img_url" => result["img_url"],
        "caption" => result["caption"],
        "likes" => result["likes"].to_i,
        "date" => result["date"].to_date,
        "user_id" => result["user_id"].to_i
      }
    end
  end

  def self.find(id)
    result = DB.exec(
      <<-SQL
        SELECT * FROM photos
        WHERE id = #{id};
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
