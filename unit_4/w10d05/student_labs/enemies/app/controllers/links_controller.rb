class LinksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Link.all
  end

  def show
    render json: Link.find(params["id"])
  end

  def create
    render json: Link.create(params["link"])
  end

  def delete
    render json: Link.delete(params["id"])
  end

  def update
    render json: Link.update(params["id"], params["link"])
  end
end
