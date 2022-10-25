class TitlesController < ApplicationController

    def index
        titles = Title.all.includes(:author).to_a
        render json: titles,  include: ['author']
    end

end