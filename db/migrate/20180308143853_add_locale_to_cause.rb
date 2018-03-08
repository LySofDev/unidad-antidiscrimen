class AddLocaleToCause < ActiveRecord::Migration[5.1]
  def change
    add_column :causes, :locale, :string, null: false
  end
end
