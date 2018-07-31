class Price
  DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'stock_prices'})

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          prices.*,
          stocks.company,
          stocks.symbol
        FROM prices
        LEFT JOIN stocks
          ON prices.stock_id = stocks.id;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "the_date" => result["the_date"],
        "value" => result["value"].to_f,
        "company" => result["company"],
        "symbol" => result["symbol"]
        # "stock_id" => result["stock_id"].to_i
      }
    end
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          prices.*,
          stocks.company,
          stocks.symbol
        FROM prices
        LEFT JOIN stocks
          ON prices.stock_id = stocks.id
        WHERE prices.id=#{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "the_date" => results["the_date"],
      "value" => results["value"].to_f,
      "company" => results["company"],
      "symbol" => results["symbol"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO prices (the_date, value, stock_id)
        VALUES ( '#{opts["the_date"]}', #{opts["value"]}, #{opts["stock_id"]} )
        RETURNING id, the_date, value, stock_id;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "the_date" => result["the_date"],
      "value" => result["value"].to_f,
      "stock_id" => result["stock_id"].to_i
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM prices WHERE id=#{id};")
    return { "DELETED" => true }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE prices
        SET the_date='#{opts["the_date"]}', value=#{opts["value"]}, stock_id=#{opts["stock_id"]}
        WHERE id=#{id}
        RETURNING id, the_date, value, stock_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "the_date" => results["the_date"],
      "value" => results["value"].to_f,
      "stock_id" => results["stock_id"].to_i
    }
  end
end #End of Class
