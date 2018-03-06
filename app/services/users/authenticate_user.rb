module Services
  module Users
    class AuthenticateUser

      def initialize(params = {})
        @email = params[:email]
        @password = params[:password]
        @errors = []
      end

      def perform
        find_user_by_email
        validate_password
        generate_jwt_token
        return_token_or_errors
      end

      private

      def set_authentication_error
        @errors = ["Invalid email or password"]
      end

      def find_user_by_email
        @user = User.where(email: @email).first
        set_authentication_error unless @user
      end

      def validate_password
        unless @user and @user.valid_password?(@password)
          set_authentication_error
        end
      end

      def generate_jwt_token
        @token = AuthToken.token(@user) unless @errors.any?
      end

      def return_token_or_errors
        OpenStruct.new({
          token: @token,
          errors: @errors
        })
      end

    end
  end
end
