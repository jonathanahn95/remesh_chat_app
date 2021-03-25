# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_conversations_on_title  (title) UNIQUE
#
class ConversationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title

  has_many :messages
end
