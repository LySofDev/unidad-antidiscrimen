require 'test_helper'

class LawTest < ActiveSupport::TestCase

  test "it has a unique title" do
    law = build(:law, title: nil)
    assert law.invalid?, "Law has no title."
    law.title = ""
    assert law.invalid?, "Law has empty title."
    other_law = create(:law)
    law.title = other_law.title
    assert law.invalid?, "Law has duplicate name."
    law.title = "Foo"
    assert law.valid?, "Law failed with valid name."
  end

  test "it has a supported locale" do
    law = build(:law, locale: nil)
    assert law.invalid?, "Law has no locale."
    law.locale = "iv"
    assert law.invalid?, "Law has invalid locale."
    law.locale = "en"
    assert law.valid?, "Law failed with locale."
  end

end
