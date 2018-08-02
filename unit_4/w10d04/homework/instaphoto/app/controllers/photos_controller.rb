class PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Photo.all
  end

  def show
    render json: Photo.find(params["id"])
  end

  def create
    render json: Photo.create(params["photo"])
  end

  def delete
    render json: Photo.delete(params["id"])
  end

  def update
    render json: Photo.update(params["id"], params["photo"])
  end
end
