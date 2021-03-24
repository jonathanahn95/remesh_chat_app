# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_conversations_on_title  (title) UNIQUE
#
require 'rails_helper'

RSpec.describe Conversation, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
