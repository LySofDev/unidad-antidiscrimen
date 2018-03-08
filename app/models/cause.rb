class Cause < ApplicationRecord

  validates :name,
    presence: true,
    uniqueness: true

  validates :locale,
    presence: true,
    supported_locale: true

end
