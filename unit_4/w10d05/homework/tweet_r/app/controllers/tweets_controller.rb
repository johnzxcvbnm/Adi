class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Tweet.all
  end

  def show
    render json: Tweet.find(params["id"])
  end

  def create
    render json: Tweet.create(params["tweet"])
  end

  def delete
    render json: Tweet.delete(params["id"])
  end

  def update
    render json: Tweet.update(params["id"], params["tweet"])
  end
end
