class Api::V1::ConversationsController < ApplicationController
    def index
      conversations = Conversation.includes(:messages).all
      render json: ConversationSerializer.new(conversations).serialized_json
    end

    def show
      conversation = Conversation.includes(:messages).find(params[:id])

      render json: ConversationSerializer.new(conversation).serialized_json
    end
  
    def create
      conversation = Conversation.new(conversation_params)

      if conversation.save
        render json: ConversationSerializer.new(conversation).serialized_json
      else
        render json: conversation.errors.full_messages, status: 422
      end
    end

    def search
      # conversations = Conversation.includes(:messages).where('title LIKE ?', "%#{params[:search]}%")
      conversations = Conversation.includes(:messages).where('title = ?', params[:search])
      render json: ConversationSerializer.new(conversations).serialized_json
    end
  
    private
    def conversation_params
      params.require(:conversation).permit(:title)
    end

  #   def options
  #     @option ||= { include: %i[messages] }
  # end
end