class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Books.all
  end

  def show
    render json: Books.show
  end
end
