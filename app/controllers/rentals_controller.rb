class RentalsController < ApplicationController

    def create
        newRental = Rental.create(rental_params)
    end

    private
    def rental_params
        params.require(:rental).permit(:month, :receive_date, :return_date)
    end

end
