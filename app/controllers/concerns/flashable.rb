module Concerns::Flashable
  extend ActiveSupport::Concern

  def set_flash
    if params[:alt]
      flash.alert = alert_messages[params[:alt]]
    elsif params[:ntc]
      flash.notice = notice_messages[params[:ntc]]
    end
  end

  def alert_messages
    {

    }
  end

  def notice_messages
    {
      "4001" => "Signed in successfully.",
      "4002" => "Signed up successfully."
    }
  end

end
