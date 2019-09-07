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
  end

  def index
  end

  def update
  end

  def destroy
  end
  
  def song_params
    params.require(:song).permit(:title, :album_name, :artist, :description)
  end
end
