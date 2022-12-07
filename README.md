# Borrow Book Rental App

## Description

Borrow is a book rental app.

Users who create an account using an email and password can view available books and select up to 3 for the next month to add to their backpack (essentially a cart).  They can also view unavailable inventory and their order history of confirmed backpacks.

Book data includes the condition of the book and when it's set to be returned.

## Link to Deployed App on Render
https://borrow-app-vtb8.onrender.com/

## Link to Repository

https://github.com/katherineyuneman/capstone-borrow-app

## Resources
Photos of the books were added from Barnes and Noble.
Styled Components used to style webpage.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

## Setup
Run 
bundle install
rails db:create
npm install --prefix client

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)


#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)

