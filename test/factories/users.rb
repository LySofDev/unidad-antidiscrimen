FactoryBot.define do

  factory :user do
    first_name "Esteban"
    last_name "Hernandez"
    email "esteban.hernandez@gmail.com"
    password "password"
    password_confirmation "password"
  end

  factory :other_user, class: User do
    first_name "Samantha"
    last_name "Olivo"
    email "samantha.olivo@gmail.com"
    password "password"
    password_confirmation "password"
  end
end
