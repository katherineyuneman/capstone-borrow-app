class RentalsController < ApplicationController

    def create
        
        newRental = Rental.find_or_create_by!(rental_params)
        
        if newRental
            
            book_params_attributes = book_params[:book_rentals_attributes]
            book_param_id = book_params_attributes[:book_id]
            newBookRental = newRental.book_rentals.create(book_id: book_param_id)
            book = Book.find_by_id(book_param_id)
            book.update!(rented: true)
            render json: newRental, include: ['book_rentals']
        else render json: {errors: new_food.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def rental_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id)
    end

    def book_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id, book_rentals_attributes: [:book_id])
    end

end
