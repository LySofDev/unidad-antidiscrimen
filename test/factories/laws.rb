FactoryBot.define do
  factory :law do
    title { Faker::Lorem.sentence }
    locale "en"
  end
end
