
export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
)

export const search = query => (
    $.ajax({
        method: 'GET',
        url: `api/users/search`
    })
)

export const recents = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${}`
    })
)