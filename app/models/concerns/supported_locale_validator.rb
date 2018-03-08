class SupportedLocaleValidator < ActiveModel::EachValidator

  def validate_each(record, attribute, value)
    unless supported_locales.include? value
      record.errors[attribute] << (options[:message] || "is not supported.")
    end
  end

  private

  def locales_dataset
    YAML.load(open(Rails.root.join("lib", "assets", "locales.yml")))
  end

  def supported_locales
    locales_dataset.keys
  end

end
