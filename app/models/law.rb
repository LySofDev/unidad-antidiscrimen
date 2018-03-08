class Law < ApplicationRecord

  validates :title,
    presence: true,
    uniqueness: true

  validates :locale,
    presence: true,
    supported_locale: true
    
end
