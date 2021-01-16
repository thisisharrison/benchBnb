class Review < ApplicationRecord
    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
    belongs_to :bench
end
