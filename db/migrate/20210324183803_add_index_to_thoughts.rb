class AddIndexToThoughts < ActiveRecord::Migration[6.1]
  def change
    add_index :thoughts, :text
  end
end
