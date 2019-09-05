class Api::PlaylistsController < ApplicationController

    def create

    end

    def update

    end

    def show

    end

    def index

    end

    def destroy

    end

    def playlist_params
        params.require(:playlist).permit(:title) #user_id
    end
end
