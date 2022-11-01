# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_01_200917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "book_rentals", force: :cascade do |t|
    t.bigint "rental_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_id"], name: "index_book_rentals_on_book_id"
    t.index ["rental_id"], name: "index_book_rentals_on_rental_id"
  end

  create_table "books", force: :cascade do |t|
    t.bigint "title_id", null: false
    t.boolean "rented"
    t.date "expected_return"
    t.string "condition"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["title_id"], name: "index_books_on_title_id"
  end

  create_table "plans", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.decimal "number_books"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_plans_on_user_id"
  end

  create_table "rentals", force: :cascade do |t|
    t.string "month"
    t.date "receive_date"
    t.date "return_date"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "confirmed"
    t.index ["user_id"], name: "index_rentals_on_user_id"
  end

  create_table "titles", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.string "title"
    t.decimal "rating"
    t.string "genre"
    t.date "publication_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
    t.index ["author_id"], name: "index_titles_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "book_rentals", "books"
  add_foreign_key "book_rentals", "rentals"
  add_foreign_key "books", "titles"
  add_foreign_key "plans", "users"
  add_foreign_key "rentals", "users"
  add_foreign_key "titles", "authors"
end
