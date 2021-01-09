class ApplicationController < ActionController::Base
    # sets the app's session token to be user's

    helper_method :current_user

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        # reset session token of the app
        session[:session_token] = nil
        current_user.reset_session_token!
    end

    # We will need this for preload state as well
    def current_user
        # check for app's session
        return nil unless session[:session_token]
        # return or find user with matching session token
        @current_user ||= User.find(session_token: session[:session_token])
    end

    # rails would have 
    # logged_in?
    # require_logged_out
    # require_logged_in
    # BUT we will use Auth and Protected in frontend to handle this

end
