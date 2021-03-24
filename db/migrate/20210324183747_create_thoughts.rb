class CreateThoughts < ActiveRecord::Migration[6.1]
  def change
    create_table :thoughts do |t|
      t.text :text
      t.belongs_to :Message, null: false, foreign_key: true

      t.timestamps
    end
  end
end
