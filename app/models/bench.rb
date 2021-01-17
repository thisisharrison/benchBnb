class Bench < ApplicationRecord
    validates :description, :lat, :lng, :seating, presence: true
    has_many :reviews

    has_one_attached :photo

    def self.in_bounds(bounds)
        n_lat = bounds[:northEast][:lat]
        n_lng = bounds[:northEast][:lng]
        s_lat = bounds[:southWest][:lat]
        s_lng = bounds[:southWest][:lng]
    
        self.where("lat < ?", n_lat)
            .where("lat > ?", s_lat)
            .where("lng < ?", n_lng)
            .where("lng > ?", s_lng)
    end

    def average_rating
        reviews.average(:rating)
    end
end
