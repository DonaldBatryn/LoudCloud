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

Song.create(title: 'Where We Go We Go', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 6, description: 'A dancy bouncy rocker')
Song.create(title: 'Mind-Out', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 9, description: 'Straight up fun!')
Song.create(title: 'Light Yr Life', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 6, description: 'Soulful electro madness')
Song.create(title: "She's Really Mine", album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: 8, description: 'A pop masterpiece in the flavor of rock')
Song.create(title: 'Rock Bottom Goodbye', album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: 8, description: 'A warm and rich choir of Donnies')
Song.create(title: 'You Shouldnt Be Sad', album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: 8, description: 'A cover of the Kinks!')
Song.create(title: 'Chariot Riding Proletariat', album_name: 'Dystopio', artist: 'mtvghosts', user_id: 6, description: 'Anti-government guitar power man!')
Song.create(title: 'In My Dream Tonite', album_name: 'Dystopio', artist: 'mtvghosts', user_id: 6, description: 'Surreal sad dream where you sang in a 70s big band')
Song.create(title: 'Gossip Ghost', album_name: 'Dystopio', artist: 'mtvghosts', user_id: 6, description: 'Sentimental tune about caring')
Song.create(title: 'Diver, I Hope Yr Not', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 6, description: 'Nu-pop ode to Brian Wilson')
Song.create(title: "Jane's Fantasy Game", album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 6, description: 'Inspired by Enders Game')
Song.create(title: 'bbitellu', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 7, description: 'A dancy bouncy funk pop n roll')
Song.create(title: 'Motivation Killer', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 7, description: 'Glam hate your job stuff')
Song.create(title: 'Deep Thought', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 7, description: 'Alt-dance-pop with sweet lush vocals')
Song.create(title: "I'm Seeing Stars", album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 11, description: 'A warped voice heeds warning')
Song.create(title: "The Five Sides of Time", album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 11, description: 'Hi Speed Pop')