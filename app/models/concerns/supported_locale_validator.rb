class SupportedLocaleValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    supported_locales_path = Rails.root.join("lib", "assets", "locales.yml")
    supported_locales = YAML.load(open(supported_locales_path))
    unless supported_locales.include? value
      record.errors[attribute] << (options[:message] || "is not supported.")
    end
  end
end
