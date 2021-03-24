class AddIndexToConversations < ActiveRecord::Migration[6.1]
  def change
    add_index :conversations, :title, unique: true
  end
end
