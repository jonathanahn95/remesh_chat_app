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
require 'rails_helper'

RSpec.describe Conversation, type: :model do
  subject(:conversation) { Conversation.new(title: 'Dummy Conversation') }

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_uniqueness_of(:title) }
  end

  describe 'associations' do
    it { should have_many(:messages) }
  end
end
