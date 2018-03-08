namespace :seed do

  desc "Seed all of the causes"
  task :causes => :environment do
    causes = YAML.load(open(Rails.root.join("lib", "assets", "causes.yml")))
    causes = causes.inject([]) do |memo, cause|
      cause.last.keys.each do |locale|
        memo << { name: cause.last[locale], locale: locale}
      end
      memo
    end
    Cause.create(causes)
    puts "English causes: #{Cause.where(locale: "en").count}"
    puts "Spanish causes: #{Cause.where(locale: "en").count}"
    puts "Total causes: #{Cause.count}"
  end

  desc "Seed all of the laws"
  task :laws => :environment do
    laws = YAML.load(open(Rails.root.join("lib", "assets", "laws.yml")))
    laws = laws.inject([]) do |memo, law|
      law.last.keys.each do |locale|
        memo << { title: law.last[locale], locale: locale }
      end
      memo
    end
    Law.create(laws)
    puts "English laws: #{Law.where(locale: "en").count}"
    puts "Spanish laws: #{Law.where(locale: "es").count}"
    puts "Total laws: #{Law.count}"
  end

end
