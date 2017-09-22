class CreateDogs < ActiveRecord::Migration[5.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :tail_wag_rate

      t.timestamps
    end
  end
end
