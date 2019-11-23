class MainController < ApplicationController
    before_action :force_json, only: :search

    def index

    end

    def search_songs
        @items = Song.ransack(title_cont: params[:q]).result(distinct: true).limit(5)
    end

    def search_users
        @items = User.ransack(username_cont: params[:q]).result(distinct: true).limit(5)
    end

    private

    def force_json
        request.format = :json
    end
end
