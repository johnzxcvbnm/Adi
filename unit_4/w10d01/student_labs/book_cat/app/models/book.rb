class Book
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'book_cat'})

  def self.all
    results = DB.exec(
      <<-SQL
            SELECT
              books.*,
              reviews.id AS review_id,
              reviews.review_content,
              users.name AS user_name,
              users.password
            FROM books
            LEFT JOIN reviews
              ON books.id = reviews.book_id
            LEFT JOIN users
              ON reviews.user_id = users.id
            ORDER BY books.id ASC;
        SQL
      )

    books = []
    last_id = nil
    results.each do |result|
      if result["id"] != last_id
        books.push({
          "id" => result["id"].to_i,
          "name" => result["name"],
          "author" => result["author"],
          "genre" => result["genre"],
          "publisher" => result["publisher"],
          "date_published" => result["date_published"].to_date,
          "reviews" => []
        })
        last_id = result["id"]
      end
      if result["review_id"]
        books.last["reviews"].push({
          "id" => result["review_id"],
          "user_name" => result["user_name"],
          "review" => result["review_content"]
        })
      end
    end

    return books
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
          SELECT
            books.*,
            reviews.id AS review_id,
            reviews.review_content,
            users.name AS user_name,
            users.password
          FROM books
          LEFT JOIN reviews
            ON books.id = reviews.book_id
          LEFT JOIN users
            ON reviews.user_id = users.id
          WHERE books.id = #{id};
         SQL
    )
    reviews = []
    results.each do |result|
      if result["review_id"]
        reviews.push({
          "id" => result["review_id"].to_i,
          "user_name" => result["user_name"],
          "review" => result["review_content"]
        })
      end
    end

    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "author" => results.first["author"],
      "genre" => results.first["genre"],
      "publisher" => results.first["publisher"],
      "date_published" => results.first["date_published"].to_date,
      "reviews" => reviews
    }
  end
end
