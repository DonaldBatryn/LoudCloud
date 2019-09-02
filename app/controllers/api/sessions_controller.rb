class Api::SessionsController < ApplicationController



  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: "api/songs/index"
    else
      render json: ["Wrong username and/or password, please try again."], status: 401
    end
  end

  def destroy
    logout
    render json: "api/sessions/create"
  end
end
