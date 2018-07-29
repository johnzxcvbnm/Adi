# Intro to Rails
## Finish our CRUD routes

## Create a show route

In `config/routes.rb`:

```ruby
get '/people/:id', to: 'people#show'
```

In `app/models/person.rb`:

```ruby
def self.find(id)
    results = DB.exec("SELECT * FROM people WHERE id=#{id};")
    return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "age" => results.first["age"].to_i,
    }
end
```

In `app/controllers/people_controller.rb`

```ruby
def show
    render json: Person.find(params["id"])
end
```

## Create a create route

In `config/routes.rb`:

```ruby
post '/people', to: 'people#create'
```

In `app/models/person.rb`:

```ruby
def self.create(opts)
    # We'll use a HEREDOC to make our SQL statement multi-lines for ease of reading
    results = DB.exec(
        <<-SQL
            INSERT INTO people (name, age)
            VALUES ( '#{opts["name"]}', #{opts["age"]} )
            RETURNING id, name, age;
        SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "age" => results.first["age"].to_i,
    }
end
```

**NOTE:** we'll add `RETURNING id, name, age` so that we get back the element that was created.  Normally it gives us an array with just one element, so we'll need to adjust `results.first`

In `app/controllers/people_controller.rb`:

```ruby
# at top of controller
skip_before_action :verify_authenticity_token

# further down
def create
    render json: Person.create(params["person"])
end
```

## Create a delete route

In `config/routes.rb`:

```ruby
delete '/people/:id', to: 'people#delete'
```

In `app/models/person.rb`:

```ruby
def self.delete(id)
    results = DB.exec("DELETE FROM people WHERE id=#{id};")
    return { "deleted" => true }
end
```

In `app/controllers/people_controller.rb`:

```ruby
def delete
    render json: Person.delete(params["id"])
end
```

## Create an update route

In `config/routes.rb`:

```ruby
put '/people/:id', to: 'people#update'
```

In `app/models/person.rb`:

```ruby
def self.update(id, opts)
    results = DB.exec(
        <<-SQL
            UPDATE people
            SET name='#{opts["name"]}', age=#{opts["age"]}
            WHERE id=#{id}
            RETURNING id, name, age;
        SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "age" => results.first["age"].to_i,
    }
end
```

In `app/controllers/people_controller.rb`:

```ruby
def update
    render json: Person.update(params["id"], params["person"])
end
```
