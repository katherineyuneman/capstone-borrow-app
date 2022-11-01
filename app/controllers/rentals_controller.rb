class RentalsController < ApplicationController

    def create
        
        newRental = current_user.rentals.find_or_create_by!(rental_params)
        
        if newRental
            book_params_attributes = book_params[:book_rentals_attributes]
            book_param_id = book_params_attributes[:book_id]
            newBookRental = newRental.book_rentals.create(book_id: book_param_id)
            book = Book.find_by_id(book_param_id)
            book.update(rented: true)
            render json: newRental, include: ['book_rentals']
        else render json: {errors: new_food.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        currentRental = current_user.rentals.includes(:books, :book_rentals)
        .joins(books: :title)
        .select('rentals.month',
        'rentals.id as id', 'rentals.receive_date', 'rentals.return_date',
        'books.rented', 'books.condition', 'books.id as book_id',
        'titles.title', 'titles.rating', 'titles.genre','titles.image_url', 'book_rentals.id as book_rental_id')
        .where(month: params[:id])
        if currentRental
            render json: currentRental
        else
            render json: { error: "Please login to view your backpack" }, status: :unauthorized
        end
    end

    private
    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def rental_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id)
    end

    def book_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id, book_rentals_attributes: [:book_id])
    end

end
