## Set up CRUD for Locations

In `psql`:

```
CREATE TABLE locations (id SERIAL, street VARCHAR(16), city VARCHAR(16), state VARCHAR(2));
```

In `config/routes.rb`:

```ruby
get '/locations', to: 'locations#index'
get '/locations/:id', to: 'locations#show'
post '/locations', to: 'locations#create'
delete '/locations/:id', to: 'locations#delete'
put '/locations/:id', to: 'locations#update'
```

Create `app/models/location.rb`:

```ruby
class Location
    # connect to postgres
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'contacts'})

    def self.all
        results = DB.exec("SELECT * FROM locations;")
        return results.map do |result|
            {
                "id" => result["id"].to_i,
                "street" => result["street"],
                "city" => result["city"],
                "state" => result["state"],
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM locations WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "street" => results.first["street"],
            "city" => results.first["city"],
            "state" => results.first["state"],
        }
    end

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO locations (street, city, state)
                VALUES ( '#{opts["street"]}', '#{opts["city"]}', '#{opts["state"]}' )
                RETURNING id, street, city, state;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "street" => results.first["street"],
            "city" => results.first["city"],
            "state" => results.first["state"],
        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM locations WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE locations
                SET street='#{opts["street"]}', city='#{opts["city"]}', state='#{opts["state"]}'
                WHERE id=#{id}
                RETURNING id, street, city, state;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "street" => results.first["street"],
            "city" => results.first["city"],
            "state" => results.first["state"],
        }
    end
end
```

In `app/controllers/locations_controller.rb`:

```ruby
class LocationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Location.all
    end

    def show
        render json: Location.find(params["id"])
    end

    def create
        render json: Location.create(params["location"])
    end

    def delete
        render json: Location.delete(params["id"])
    end

    def update
        render json: Location.update(params["id"], params["location"])
    end
end
```
