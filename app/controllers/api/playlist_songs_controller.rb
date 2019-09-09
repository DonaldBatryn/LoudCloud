class Api::PlaylistSongsController < ApplicationController
  
  def create
    @playlist_song = PlaylistSong.new(ps_params)
    @playlist_song.user_id = current_user.id
    if @playlist_song.save
      render "api/playlists/show"
    end
  end

  def destroy
  end

  def ps_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end
end
