
export const addComment = comment => (
    $.ajax({
        method: 'POST',
        url: `api/songs/${comment.comment.song_id}/comments`,
        data: { comment }
    })
)

export const removeComment = comment => (
    $.ajax({
        method: 'DELETE',
        url: `api/songs/${comment.song_id}`
    })
)