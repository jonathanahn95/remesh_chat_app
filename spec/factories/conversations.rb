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
FactoryGirl.define do
  factory :conversation do
    title "MyString"
  end
end
