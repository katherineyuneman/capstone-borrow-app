class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        byebug
        new_book = Book.create!(book_params)
        render json: new_book, status: :created
    end

    private
    def book_params
        params.require(:_json)
        # params.permit(:_json, :condition, :title_id, :book)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
