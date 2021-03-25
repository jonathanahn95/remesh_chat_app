class Api::V1::MessagesController < ApplicationController
    def create
      message = Message.new(messages_params)
      message.conversation_id = params['conversationId']
      
      if message.save
        render json: MessageSerializer.new(message).serialized_json
      else
        render json: message.errors.full_messages, status: 422
      end
    end
  
    def index
      messages = Message.where( conversation_id: params[:conversation_id])

      render json: MessageSerializer.new(messages).serialized_json
    end
  
    def show
      message = Message.find_by(id: params[:id])

      render json: MessageSerializer.new(message).serialized_json
    end
    
    private
    def messages_params
      params.require(:message).permit(:text)
    end
end