class RentalsController < ApplicationController

    def create
        newRental = Rental.find_or_create_by!(rental_params)
        render json: newRental
    end

    private
    def rental_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id)
    end

end
