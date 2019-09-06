json.users do
    json.extract! @user, :id, :username, :email
end