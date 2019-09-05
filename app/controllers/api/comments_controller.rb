class Api::CommentsController < ApplicationController
  def create
  end

  def destroy
  end
  
  def comment_params
    params.require(:comment).permit(:body) #song_id, user_id
  end
end
