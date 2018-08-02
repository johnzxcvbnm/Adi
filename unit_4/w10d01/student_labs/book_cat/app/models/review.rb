class Review
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => "book_cat"})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          *
        FROM reviews;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "book_id" => result["book_id"].to_i,
        "user_id" => result["user_id"].to_i,
        "review" => result["review_content"]
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT * FROM reviews WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "book_id" => results["book_id"].to_i,
      "user_id" => results["user_id"].to_i,
      "review" => results["review_content"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO reviews (book_id, user_id, review_content)
        VALUES ( #{opts["book_id"]}, #{opts["user_id"]}, '#{opts["review_content"]}')
        RETURNING id, book_id, user_id, review_content;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "book_id" => results["book_id"].to_i,
      "user_id" => results["user_id"].to_i,
      "review" => results["review_content"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM reviews WHERE id = #{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE reviews
        SET book_id = #{opts["book_id"]},
            user_id = #{opts["user_id"]},
            review_content = '#{opts["review_content"]}'
        WHERE id = #{id}
        RETURNING id, book_id, user_id, review_content;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "book_id" => results["book_id"].to_i,
      "user_id" => results["user_id"].to_i,
      "review" => results["review_content"]
    }
  end
end
