class DevelopmentController < ApplicationController

  def index

  end

  def notice_flash
    flash.notice = "This is notice flash."
  end

  def alert_flash
    flash.alert = "This is alert flash."
  end

end
