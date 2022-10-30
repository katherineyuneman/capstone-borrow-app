class TitlesController < ApplicationController

    def index
        # @book_count = Title.book_count
        titles = Title.available_book_count.includes(:author).to_a
        render json: titles, include: ['author']
    end

    def titles_books
        title = Title.find_by_id(params[:_json])
        bookId = title.books.where(rented:false).first.id
        render json: bookId
    end

    private
    # def title_params
    #     params.permit(:_json)
    # end

end