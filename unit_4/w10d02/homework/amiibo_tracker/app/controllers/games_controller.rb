class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Game.all
  end

  def show
    render json: Game.find(params["id"])
  end

  def create
    render json: Game.create(params["game"])
  end

  def delete
    render json: Game.delete(params["id"])
  end

  def update
    render json: Game.update(params["id"], params["game"])
  end
end
