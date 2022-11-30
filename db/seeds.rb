# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: 'smith@johns.com', password_digest: '1234', first_name: 'John', last_name: 'Smith' )
user2 = User.create(email: 'harry@potter.com', password_digest: '1234', first_name: 'Harry', last_name: 'Potter' )

author1 = Author.create(first_name: 'Michelle', last_name: 'Obama')
Title.create(author_id: 2, title: 'The Light we Carry: Overcoming in Uncertain Times', rating: 5, genre: 'Non-Ficton', publication_date: '2022-11-15')


# title1=Title.find_by_id(3)
# title1.books.create(rented: 1, expected_return: '2022-11-01', condition: 'New')


# create_table "books", force: :cascade do |t|
#     t.bigint "title_id", null: false
#     t.boolean "rented"
#     t.date "expected_return"
#     t.string "conditon"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["title_id"], name: "index_books_on_title_id"
#   end