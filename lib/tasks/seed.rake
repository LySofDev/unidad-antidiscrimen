namespace :seed do

  desc "Seed all of the causes"
  task :causes => :environment do
    asset_path = open(Rails.root.join("lib", "assets", "causes.yml"))
    causes_data = YAML.load(asset_path)
    causes = causes_data.collect { |cause| { name: cause } }
    Cause.create(causes)
  end

end
