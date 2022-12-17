class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        new_title = Title.create!(title_params)
        render json: new_title, status: :created
    end
    

end
