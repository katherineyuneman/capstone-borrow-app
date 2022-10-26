class TitlesController < ApplicationController

    def index
        # @book_count = Title.book_count
        titles = Title.available_book_count.includes(:author).to_a
        render json: titles, include: ['author']
    end

    private
    

end