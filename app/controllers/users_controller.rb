class UsersController < ApplicationController

    ##signup - creates new user and logs in

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    
    #/me show page aka gets current user if there is one in session
    def show
        @current_user = User.find_by(id: session[:user_id])
        if @current_user = @current_user || User.find_by(id: session[:user_id])
            render json: @current_user
        else
            render json: {errors: "Not authorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
    end

end
