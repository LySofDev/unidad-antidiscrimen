module Services
  module Users
    class RegisterUser
      def initialize(params = {})
        @params = params
        @errors = []
      end

      def perform
        create_user_with_params
        return_user_or_errors
      end

      private

      def create_user_with_params
        @user = User.create(@params)
        @errors = @user.errors.full_messages
      end

      def return_user_or_errors
        OpenStruct.new({
          user: @user,
          errors: @errors
        })
      end
    end
  end
end
