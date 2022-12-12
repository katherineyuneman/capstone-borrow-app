class RentalsController < ApplicationController
    before_action :authorize
    
    def index
        user_rentals = current_user.rentals.sorted_rentals.where(confirmed: true)
        # .select('rentals.month',
        # 'rentals.id as id', 'rentals.receive_date', 'rentals.return_date', 'rentals.confirmed',
        # 'books.rented', 'books.condition', 'books.id as book_id',
        # 'titles.title', 'titles.rating', 'titles.genre','titles.image_url', 'book_rentals.id as book_rental_id')
        if user_rentals
            render json: user_rentals
        else
            render json: {errors: newRental.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    def create
        newRental = current_user.rentals.find_or_create_by!(rental_params)
        if newRental
            book_params_attributes = book_params[:book_rentals_attributes]
            book_param_id = book_params_attributes[:book_id]
            newBookRental = newRental.book_rentals.create(book_id: book_param_id)
            book = Book.find_by_id(book_param_id)
            book.update(rented: true)
            render json: newRental, include: ['book_rentals']
        else render json: {errors: newRental.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        currentRental = current_user.rentals.includes(:books, :book_rentals)
        .joins(books: :title)
        .select('rentals.month',
        'rentals.id as id', 'rentals.receive_date', 'rentals.return_date', 'rentals.confirmed',
        'books.rented', 'books.condition', 'books.id as book_id',
        'titles.title', 'titles.rating', 'titles.genre','titles.image_url', 'book_rentals.id as book_rental_id')
        .where(month: params[:id])
        if currentRental
            render json: currentRental
        else
            render json: { error: "Please login to view your backpack" }, status: :unauthorized
        end
    end

    def update
        currentRental = current_user.rentals.find_by(month: params[:id])
        if currentRental
            currentRental.update(confirmed: true)
            render json: currentRental
        else
            render json: { error: "You are not authorized to confirm this backpack" }, status: :unauthorized
        end
    end

    def destroy
        currentRental = current_user.rentals.find_by(month: params[:id])
        if currentRental
            currentRental.books.map { |book| book.update(rented: false)}
            currentRental.destroy
            head :no_content
        else
        end
    end

    private
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end

      def getTitles
        book_titles = Book.titles.includes(:title)
        # user_rentals = current_user.rentals.sorted_rentals.where(confirmed: true).includes(:books).joins(books: :title)
        # .select('rentals.month',
        # 'rentals.id as id', 'rentals.receive_date', 'rentals.return_date', 'rentals.confirmed',
        # 'books.rented', 'books.condition', 'books.id as book_id',
        # 'titles.title', 'titles.rating', 'titles.genre','titles.image_url', 'book_rentals.id as book_rental_id')
        return render json: book_titles
      end

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def current_rental
        currentRental = @current_user.rentals.find_by(month: params[:id])
    end

    def rental_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id)
    end

    def book_params
        params.require(:rental).permit(:month, :receive_date, :return_date, :user_id, book_rentals_attributes: [:book_id])
    end

    # def updateBookRented
    #     book_rentals.map { |book| book.rented=false}
    # end

end
