class AuthorsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        authors = Author.all
        render json: authors
    end

    def create
        new_author = Author.create!(author_params)
        # if new_author.valid?
            render json: new_author, status: :created
        # else render json: {errors: new_author.errors.full_messages}, status: :unprocessable_entity
        # end
    end

    private

    def author_params
        params.require(:author).permit(:first_name, :last_name)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
