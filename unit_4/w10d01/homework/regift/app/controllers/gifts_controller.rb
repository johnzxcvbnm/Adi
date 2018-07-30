class GiftsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Gift.all
  end

  def show
    render json: Gift.find(params["id"])
  end

  def create
    render json: Gift.create(params["gift"])
  end

  def delete
    render json: Gift.delete(params["id"])
  end

  def update
    render json: Gift.update(params["id"], params["gift"])
  end

  def random
    render json: Gift.random
  end
end
