class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])

    if @comment
      @comment.destroy
      render json: params[:id]
    else
      render json: ['No comment to delete']
    end
  end
  
  def comment_params
    params.require(:comment).permit(:body, :user_id, :song_id) 
  end
end
