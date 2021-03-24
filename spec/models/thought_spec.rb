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
require 'rails_helper'

RSpec.describe Thought, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
