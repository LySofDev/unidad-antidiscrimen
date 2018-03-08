class SupportedLocaleValidator < ActiveModel::EachValidator

  def validate_each(record, attribute, value)
    unless supported_locales.include? value
      record.errors[attribute] << (options[:message] || "is not supported.")
    end
  end

  private

  def supported_locales
    YAML.load(open(Rails.root.join("lib", "assets", "locales.yml")))
  end
  
end
