class Review < ApplicationRecord
    belongs_to :author, 
        class_name: :User
    belongs_to :bench
end
