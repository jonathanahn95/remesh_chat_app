class AddIndexToMessages < ActiveRecord::Migration[6.1]
  def change
    add_index :messages, :text
  end
end
