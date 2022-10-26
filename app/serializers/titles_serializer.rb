class TitlesSerializer < ActiveModel::Serializer
  
  has_many :books, include_nested_associations: true

  
end
