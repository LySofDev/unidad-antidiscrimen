class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # First Name is always present
  validates :first_name, presence: true

  # Last Name is always present
  validates :last_name, presence: true

end
