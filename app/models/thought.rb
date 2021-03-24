# == Schema Information
#
# Table name: thoughts
#
#  id         :integer          not null, primary key
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  Message_id :integer          not null
#
# Indexes
#
#  index_thoughts_on_Message_id  (Message_id)
#  index_thoughts_on_text        (text)
#
# Foreign Keys
#
#  Message_id  (Message_id => Messages.id)
#
class Thought < ApplicationRecord
  validates :text, presence: true

  belongs_to :Message
end
