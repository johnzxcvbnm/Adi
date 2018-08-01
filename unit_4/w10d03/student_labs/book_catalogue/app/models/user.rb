class User
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'book_cat'})

  def self.all
    results = DB.exec("SELECT * FROM users;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "password" => result["password"]
      }
    end
  end
end
