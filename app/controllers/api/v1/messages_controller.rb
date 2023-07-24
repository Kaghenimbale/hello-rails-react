class Api::V1::MessagesController < ApplicationController
  def index
    random_message = Message.order(Arel.sql('RANDOM()')).first
    if random_message
      render json: { greeting: random_message.message }
    else
      render json: { greeting: 'No greetings found!' }, status: :not_found
    end
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
