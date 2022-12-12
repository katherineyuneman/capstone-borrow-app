class TitlesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        # @book_count = Title.book_count
        titles = Title.available_book_count.includes(:author).to_a
        render json: titles, include: ['author']
    end

    def create
        new_title = Title.create!(title_params)
        render json: new_title, status: :created
    end

    def titles_books
        title = Title.find_by_id(params[:_json])
        bookId = title.books.where(rented:false).first.id
        render json: bookId
    end

    private
    def title_params
        params.permit(:author_id, :title, :rating, :genre, :publication_date, :image_url)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end