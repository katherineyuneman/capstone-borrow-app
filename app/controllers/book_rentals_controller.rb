class BookRentalsController < ApplicationController

    def destroy
        book_rental = BookRental.find_by_id(params[:id])
        
        bookId = book_rental.book_id
       
        book_rental.destroy
        book = Book.find_by_id(bookId).update(rented:false)
        head :no_content
    end



    private
    # def rental_params
    #     params.require(:rental).permit(:month, :receive_date, :return_date, :user_id)
    # end

    # def book_params
    #     params.require(:rental).permit(:month, :receive_date, :return_date, :user_id, book_rentals_attributes: [:book_id])
    # end

end
