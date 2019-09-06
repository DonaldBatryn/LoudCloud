# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all

User.create!(username: "Guest", email: "guest@loudcloud.com", password: "123456")
User.create!(username: "Donnie", email: "donald.batryn@gmail.com", password: "123456")
User.create!(username: "Polly", email: "polly@gmail.com", password: "123456")
User.create!(username: "Andy", email: "andy@gmail.com", password: "123456")
User.create!(username: "Trevor", email: "trevor@gmail.com", password: "123456")
User.create!(username: "Ivo", email: "ivo@gmail.com", password: "123456")
User.create!(username: "Anis", email: "Anis@gmail.com", password: "123456")
User.create!(username: "Daniel", email: "Daniel@gmail.com", password: "123456")
User.create!(username: "Jon", email: "jon@gmail.com", password: "123456")
User.create!(username: "Jesse", email: "jwong@gmail.com", password: "123456")
User.create!(username: "Allen", email: "allen@gmail.com", password: "123456")
