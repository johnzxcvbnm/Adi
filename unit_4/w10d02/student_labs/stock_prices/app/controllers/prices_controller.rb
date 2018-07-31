class PricesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Price.all
  end

  def show
    render json: Price.find(params["id"])
  end

  def create
    render json: Price.create(params["price"])
  end

  def delete
    render json: Price.delete(params["id"])
  end

  def update
    render json: Price.update(params["id"], params["price"])
  end
end
