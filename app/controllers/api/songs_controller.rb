class Api::SongsController < ApplicationController
 
  def create
    @song = Song.new(song_params)
    @song.user_id = current_user.id
    @song.audio.attach(params[:audio])
    if @song.save
      render json: @song
    else
      render json: ["Invalid song information, please try again"], status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  def index
    @songs = Song.all
  end

  def update
    @song = Song.find(params[:id])
  end

  def destroy
    @song = current_user.songs.find(params[:id])
    @song.destroy
    render json: ["Song has been deleted"]
  end
  
  def song_params
    params.require(:song).permit(:title, :album_name, :artist, :description, :audio)
  end
end
