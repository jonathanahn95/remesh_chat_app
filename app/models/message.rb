# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  text            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  conversation_id :integer          not null
#
# Indexes
#
#  index_messages_on_conversation_id  (conversation_id)
#  index_messages_on_text             (text)
#
# Foreign Keys
#
#  conversation_id  (conversation_id => conversations.id)
#
class Message < ApplicationRecord
  validates :text, presence: true

  has_many :thoughts
  belongs_to :conversation
end
