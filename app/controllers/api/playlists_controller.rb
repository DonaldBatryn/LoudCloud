class Api::PlaylistsController < ApplicationController

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id
        if @playlist.save
            render "api/playlists/show"
        else
            render json: @playlist.errors.full_messages
        end
    end

    def update
        @playlist = current_user.playlists.find(params[:id])
        song = params[:song]
        @playlist.song_ids << song.id
        if @playlist.update_attributes
            render "api/playlists/show"
        else
            render json: @playlist.errors.full_messages
        end
    end


    def show
        @playlist = Playlist.find(params[:id])
    end

    def index   
        @playlists = Playlist.all
    end

    def destroy
        @playlist = current_user.playlists.find(params[:id])
        @playlist.destroy
        render "api/playlists/index"
    end

    def playlist_params
        params.require(:playlist).permit(:title) #user_id
    end
end
