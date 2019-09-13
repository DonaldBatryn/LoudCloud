class Api::UsersController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            @songs = @user.songs
            render "api/users/show"
        else
            render json: ["Page Not Found"], status: 404
        end
    end

    def search
        if params[:query].match(/\?query=([^&]*)/)[1] + "%"
            @users = User.where('LOWER(username) LIKE ?', username.downcase)
        else
            @users = User.none
        end
        render :results
    end


    def index
        @users = User.all
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :image)
    end
end
