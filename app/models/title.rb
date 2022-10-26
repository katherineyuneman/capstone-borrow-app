class Title < ApplicationRecord
  belongs_to :author
  has_many :books


  def self.available_book_count
    self
    .joins('LEFT OUTER JOIN books ON titles.id = books.title_id AND books.rented = FALSE')
    .select(
        'titles.title','titles.id', 'titles.rating',
        'titles.genre', 'titles.author_id as author_id', 'titles.publication_date', 'count(books.rented) as count_available')
        .group('titles.title','titles.id', 'titles.rating',
        'titles.genre', 'titles.author_id', 'titles.publication_date')
  end

  
end