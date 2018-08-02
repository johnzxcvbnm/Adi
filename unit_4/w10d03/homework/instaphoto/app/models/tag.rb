class Tag
  DB = PG.connect({
    :host => 'localhost',
    :port => 5432,
    :dbname => 'instaphoto'
    })

  def self.index
    results = DB.exec(
      <<-SQL
        SELECT
          *
        FROM tags;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "comment" => result["comment"],
        "user_id" => result["user_id"].to_i,
        "photo_id" => result["photo_id"].to_i
      }
  end

  def self.show(id)
    results = DB.exec(
      <<-SQL
        SELECT
          *
        FROM tags
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "comment" => results["comment"],
      "user_id" => results["user_id"].to_i,
      "photo_id" => results["photo_id"].to_i
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO tags (comment, user_id, photo_id)
        VALUES ( '#{opts["comment"]}', #{opts["user_id"]}, #{opts["photo_id"]})
        RETURNING id, comment, user_id, photo_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "comment" => results["comment"],
      "user_id" => results["user_id"].to_i,
      "photo_id" => results["photo_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM tags WHERE id = #{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE tags
        SET comment = '#{opts["comment"]}',
            user_id = #{opts["user_id"]},
            photo_id = #{opts["photo_id"]}
        WHERE id = #{id}
        RETURNING id, comment, user_id, photo_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "comment" => results["comment"],
      "user_id" => results["user_id"].to_i,
      "photo_id" => results["photo_id"].to_i
    }
  end
end
