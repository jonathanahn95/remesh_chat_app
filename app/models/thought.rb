# == Schema Information
#
# Table name: thoughts
#
#  id         :integer          not null, primary key
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  message_id :integer          not null
#
# Indexes
#
#  index_thoughts_on_message_id  (message_id)
#  index_thoughts_on_text        (text)
#
# Foreign Keys
#
#  message_id  (message_id => messages.id)
#
class Thought < ApplicationRecord
  validates :text, presence: true

  belongs_to :message
end
