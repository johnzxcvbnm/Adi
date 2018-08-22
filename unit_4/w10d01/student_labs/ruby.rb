# Postgres commands to create tables and add basic seed data

# CREATE TABLE users (id SERIAL, user_name VARCHAR(32), password VARCHAR(32), avatar TEXT);
# CREATE TABLE posts (id SERIAL, post_content TEXT, image TEXT, user_id INT);

# INSERT INTO posts (post_content, image, user_id) VALUES ('This post is way too', 'https://i.ytimg.com/vi/_37IuCIaMFA/maxresdefault.jpg', 1), ('Is this a cat?', 'https://i.ytimg.com/vi/_37IuCIaMFA/maxresdefault.jpg', 1), ('What is this app abo', 'https://i.ytimg.com/vi/_37IuCIaMFA/maxresdefault.jpg', 2), ('I was going to go to the gym, but I decided to go to Dairy Queen Instead', 'https://i.ytimg.com/vi/_37IuCIaMFA/maxresdefault.jpg', 3);

# INSERT INTO users (user_name, password, avatar) VALUES ('John_K', '1234', 'https://vignette.wikia.nocookie.net/parody/images/e/e2/Super_Secret.jpg/revision/latest/scale-to-width-down/400?cb=20180120111247'), ('Jordan', '5678', 'https://vignette.wikia.nocookie.net/parody/images/e/e2/Super_Secret.jpg/revision/latest/scale-to-width-down/400?cb=20180120111247'), ('Sean', 'abc', 'https://vignette.wikia.nocookie.net/parody/images/e/e2/Super_Secret.jpg/revision/latest/scale-to-width-down/400?cb=20180120111247');

Rails.application.routes.draw do

  # All routes for posts
  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'
  post '/posts', to: 'posts#create'
  delete '/posts/:id', to: 'posts#delete'
  put '/posts/:id', to: 'posts#update'

end


class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # Get all the posts
  def index
    render json: Post.all
  end

  # Get one specific post at ID
  def show
    render json: Post.find(params["id"])
  end

  # Create a new post
  def create
    render json: Post.create(params["post"])
  end

  # Delete a post at ID
  def delete
    render json: Post.delete(params["id"])
  end

  # Update an existing post at ID
  def update
    render json: Post.update(params["id"], params["post"])
  end
end

class Post
  # Connect to the database
  DB = PG.connect({
    :host => 'localhost',
    :port => 5432,
    :dbname => 'quitter_app_development'
  })

  #Pulls all the posts along with their user who created it
  def self.all
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM posts
        JOIN users
        ON posts.user_id = users.id;
      SQL
    )
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "post_content" => result["post_content"],
        "image" => result["image"],
        "user_id" => result["user_id"].to_i,
        "user_name" => result["user_name"],
        "avatar" => result["avatar"]
      }
    end
  end

  # Pulls one specific Post
  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM posts
        JOIN users
          ON posts.user_id = users.id
        WHERE posts.id = #{id};
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "post_content" => results["post_content"],
      "image" => results["image"],
      "user_id" => results["user_id"].to_i,
      "user_name" => results["user_name"],
      "avatar" => results["avatar"]
    }
  end

  # Create a new Post
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO posts (post_content, image, user_id)
        VALUES ( '#{opts["post_content"]}', '#{opts["image"]}', #{opts["user_id"]})
        RETURNING id, post_content, image, user_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "post_content" => results["post_content"],
      "image" => results["image"],
      "user_id" => results["user_id"].to_i
    }
  end

  # Delete a post at ID
  def self.delete(id)
    results = DB.exec(
      <<-SQL
        DELETE FROM posts WHERE id = #{id};
      SQL
    )
    return { "DELETED" => true }
  end

  # Update a post at ID
  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE posts
        SET post_content = '#{opts["post_content"]}',
            image = '#{opts["image"]}',
            user_id = #{opts["user_id"]}
        WHERE id = #{id}
        RETURNING id, post_content, image, user_id;
      SQL
    ).first
    return {
      "id" => results["id"].to_i,
      "post_content" => results["post_content"],
      "image" => results["image"],
      "user_id" => results["user_id"].to_i
    }
  end
end
