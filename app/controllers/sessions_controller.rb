class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] ||= user.id
            render json: user, status: :ok
        else
            render json: {errors: "Invalid email or password."}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            session.destroy
            head :no_content, status: :created
        else
            render json: {errors: ["User should be logged in"]}, status: :not_found
        end
    end

end
