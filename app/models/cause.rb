class Cause < ApplicationRecord

  validates :name,
    presence: true,
    uniqueness: true
    
end
