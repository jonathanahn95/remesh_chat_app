class ChangeColName < ActiveRecord::Migration[6.1]
  def change
    def change
      rename_column :thoughts, :Message_id, :message_id
    end
  end
end
