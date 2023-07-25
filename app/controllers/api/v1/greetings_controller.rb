class Api::V1::GreetingsController < ApplicationController
  def index
    random_message = Greeting.order(Arel.sql('RANDOM()')).first
    if random_message
      render json: { greeting: random_message.message }
    else
      render json: { greeting: 'No greetings found!' }, status: :not_found
    end
  end
end
