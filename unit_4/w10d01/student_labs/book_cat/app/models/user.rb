class User
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'book_cat'})

  def self.all
    results = DB.exec(
      <<-SQL
            SELECT
              users.*,
              books.id AS book_id,
              books.name AS book_name,
              books.author,
              books.genre,
              books.publisher,
              books.date_published
            FROM users
            LEFT JOIN books
              ON users.id = books.user_id
            ORDER BY users.id ASC;
         SQL
      )
      users = []
      last_user = nil
      results.each do |result|
        if result["id"] != last_user
          user = {
            "id" => result["id"].to_i,
            "name" => result["name"],
            "password" => result["password"],
            "books" => []
          }
          users.push(user)
          last_user = result["id"]
        end
        if result["book_id"]
          users.last["books"].push({
            "id" => result["book_id"].to_i,
            "name" => result["book_name"],
            "author" => result["author"],
            "genre" => result["genre"],
            "publisher" => result["publisher"],
            "date_published" => result["date_published"]
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
            books.id AS book_id,
            books.name AS book_name,
            books.author,
            books.genre,
            books.publisher,
            books.date_published
          FROM users
          LEFT JOIN books
            ON users.id = books.user_id
          WHERE users.id = #{id};
         SQL
    )
    books = []
    results.each do |result|
      if result["book_id"]
        books.push({
          "id" => result["book_id"].to_i,
          "name" => result["book_name"],
          "author" => result["author"],
          "genre" => result["genre"],
          "publisher" => result["publisher"],
          "date_published" => result["date_published"]
          })
      end
    end
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "password" => results.first["password"],
      "books" => books
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO users (name, password)
        VALUES ( '#{opts["name"]}', '#{opts["password"]}')
        RETURNING id, name, password;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "password" => results["password"]
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
        SET
          name = '#{opts["name"]}',
          password = '#{opts["password"]}'
        WHERE id = #{id}
        RETURNING id, name, password;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "name" => results["name"],
      "password" => results["password"]
    }
  end
end
