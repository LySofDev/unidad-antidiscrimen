require 'test_helper'

class CauseTest < ActiveSupport::TestCase

  test "It has a present name" do
    cause = Cause.new
    assert cause.invalid?, "Cause has no name."
    cause.name = "Foo"
    assert cause.valid?, "Cause has a valid name."
  end

  test "It has a unique name" do
    causeA = Cause.create(name: "Foo")
    assert causeA.persisted?, "Cause A was not created."
    causeB = Cause.new(name: "Foo")
    assert causeB.invalid?, "Cause B has a repeated name."
    causeB.name = "Bar"
    assert causeB.valid?, "Cause B cannot save unique name."
  end

end
