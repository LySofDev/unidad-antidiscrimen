require 'test_helper'

class CauseTest < ActiveSupport::TestCase

  test "It has a present name" do
    cause = build(:cause, name: nil)
    assert cause.invalid?, "Cause has no name."
    cause.name = "Foo"
    assert cause.valid?, "Cause has a valid name."
  end

  test "It has a unique name" do
    causeA = create(:cause, name: "Foo")
    assert causeA.persisted?, "Cause A was not created."
    causeB = build(:cause, name: "Foo")
    assert causeB.invalid?, "Cause B has a repeated name."
    causeB.name = "Bar"
    assert causeB.valid?, "Cause B cannot save unique name."
  end

  test "It is bound to a supported locale" do
    cause = build(:cause, locale: nil)
    assert cause.invalid?, "Cause has no locale."
    cause.locale = "iv"
    assert cause.invalid?, "Cause has invalid locale."
    cause.locale = "en"
    assert cause.valid?, "Cause has failed with a valid locale."
    cause.locale = :en
    assert cause.valid?, "Doesn't support locales as symbols"
  end

end
