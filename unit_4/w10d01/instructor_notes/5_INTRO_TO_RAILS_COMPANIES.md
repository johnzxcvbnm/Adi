
## Set up CRUD for Companies

In `psql`:

```
CREATE TABLE companies (id SERIAL, name VARCHAR(160), industry VARCHAR(160));

INSERT INTO companies (name, industry) VALUES ('Bream-Hall', 'Hospitality');
INSERT INTO companies (name, industry) VALUES ('Raviga', 'Construction');
INSERT INTO companies (name, industry) VALUES ('Maleant Data Systems Solutions', 'Real-Estate');
INSERT INTO companies (name, industry) VALUES ('Bachmanity', 'Education');
INSERT INTO companies (name, industry) VALUES ('Aviato', 'Advertising');
INSERT INTO companies (name, industry) VALUES ('Hooli', 'Government');
INSERT INTO companies (name, industry) VALUES ('SeeFood Technologies Inc', 'Healthcare');
INSERT INTO companies (name, industry) VALUES ('Pied Piper', 'IT');
INSERT INTO companies (name, industry) VALUES ('Infotrade', 'Legal');
INSERT INTO companies (name, industry) VALUES ('Endframe', 'Mining');
SELECT * FROM companies;
```

Data brought to you by [faker](https://github.com/stympy/faker)

In `config/routes.rb`:

```ruby
get '/companies', to: 'companies#index'
get '/companies/:id', to: 'companies#show'
post '/companies', to: 'companies#create'
delete '/companies/:id', to: 'companies#delete'
put '/companies/:id', to: 'companies#update'
```

Create `app/models/company.rb`:

```ruby
class Company
    # connect to postgres
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'contacts'})

    def self.all
        results = DB.exec("SELECT * FROM companies;")
        return results.map do |result|
            {
                "id" => result["id"].to_i,
                "name" => result["name"],
                "industry" => result["industry"],
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM companies WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "industry" => results.first["industry"],
        }
    end

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO companies (name, industry)
                VALUES ( '#{opts["name"]}', '#{opts["industry"]}' )
                RETURNING id, name, industry;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "industry" => results.first["industry"],
        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM companies WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE companies
                SET name='#{opts["name"]}', industry='#{opts["industry"]}'
                WHERE id=#{id}
                RETURNING id, name, industry;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "name" => results.first["name"],
            "industry" => results.first["industry"],
        }
    end
end
```

In `app/controllers/companies_controller.rb`:

```ruby
class CompaniesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Company.all
    end

    def show
        render json: Company.find(params["id"])
    end

    def create
        render json: Company.create(params["company"])
    end

    def delete
        render json: Company.delete(params["id"])
    end

    def update
        render json: Company.update(params["id"], params["company"])
    end
end
```
