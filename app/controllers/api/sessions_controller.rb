class Api::SessionsController < ApplicationController

  # skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: ["Wrong username and/or password, please try again."], status: 401
    end
  end

  def destroy
    logout
    render json: ['logged out successfully']
  end
end
