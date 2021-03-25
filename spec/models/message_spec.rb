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
require 'rails_helper'

RSpec.describe Message, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:text) }
  end

  describe 'associations' do
    it { should have_many(:thoughts) }
    it { should belong_to(:conversation) }
  end
end
