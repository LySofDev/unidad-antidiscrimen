FactoryBot.define do
  factory :cause do
    name { Faker::Lorem.word }
    locale :en
  end
end
