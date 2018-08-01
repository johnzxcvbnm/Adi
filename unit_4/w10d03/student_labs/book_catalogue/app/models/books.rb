class Book
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'book_catalogue_development'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          *
        FROM books;
      SQL
    )

    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "author" => result["author"],
        "genre" => result["genre"],
        "publisher" => result["publisher"],
        "date_published" => result["date_published"],
        "user_id" => result["user_id"]
      }
    end
  end

  def self.show(id)
    result = DB.exec(
      <<-SQL
        SELECT
          *
        FROM books
        WHERE id = #{id};
      SQL
    ).first
    return {
      "id" => result["id"].to_i,
      "name" => result["name"],
      "author" => result["author"],
      "genre" => result["genre"],
      "publisher" => result["publisher"],
      "date_published" => result["date_published"],
      "user_id" => result["user_id"]
    }
  end
end
