class Api::V1::ThoughtsController < ApplicationController
  def index
    messages = Thought.where( Message_id: params[:message_id])

    render json: ThoughtSerializer.new(messages).serialized_json
  end

  def create
    thought = Thought.new(thoughts_params)
    thought.Message_id = params['messageId']
    
    if thought.save
      render json: ThoughtSerializer.new(thought).serialized_json
    else
      render json: thought.errors.full_messages, status: 422
    end
  end


  private
  def thoughts_params
    params.require(:thought).permit(:text)
  end
end