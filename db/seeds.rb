# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Song.destroy_all
Playlist.destroy_all


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

Song.create!(title: 'Mind-Out', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 2, description: 'Straight up fun!')
Song.create!(title: 'Where We Go We Go', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 3, description: 'A dancy bouncy rocker')
Song.create!(title: 'Light Yr Life', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 6, description: 'Soulful electro madness')
Song.create!(title: "She's Really Mine", album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: 2, description: 'A pop masterpiece in the flavor of rock')
Song.create!(title: 'Rock Bottom Goodbye', album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: 4, description: 'A warm and rich choir of Donnies')
Song.create!(title: 'You Shouldnt Be Sad', album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: 8, description: 'A cover of the Kinks!')
Song.create!(title: 'Chariot Riding Proletariat', album_name: 'Dystopio', artist: 'mtvghosts', user_id: 6, description: 'Anti-government guitar power man!')
Song.create!(title: 'In My Dream Tonite', album_name: 'Dystopio', artist: 'mtvghosts', user_id: 2, description: 'Surreal sad dream where you sang in a 70s big band')
Song.create!(title: 'Gossip Ghost', album_name: 'Dystopio', artist: 'mtvghosts', user_id: 4, description: 'Sentimental tune about caring')
Song.create!(title: 'Diver, I Hope Yr Not', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 4, description: 'Nu-pop ode to Brian Wilson')
Song.create!(title: "Jane's Fantasy Game", album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 6, description: 'Inspired by Enders Game')
Song.create!(title: 'bbitellu', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 7, description: 'A dancy bouncy funk pop n roll')
Song.create!(title: 'Motivation Killer', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 3, description: 'Glam hate your job stuff')
Song.create!(title: 'Deep Thought', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: 2, description: 'Alt-dance-pop with sweet lush vocals')
Song.create!(title: "I'm Seeing Stars", album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 11, description: 'A warped voice heeds warning')
Song.create!(title: "The Five Sides of Time", album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: 2, description: 'Hi Speed')


Playlist.create!(title: "Weird Jams", user_id: 2, song_ids: [1, 4, 7, 9])
Playlist.create!(title: "Summertime Sad-Songs", user_id: 6, song_ids: [2, 5, 8, 10])
Playlist.create!(title: "Shoutin at the Sun", user_id: 2, song_ids: [3, 6, 9, 11])
Playlist.create!(title: "Mellow Yellow Donovan Tribute", user_id: 7, song_ids: [4, 9, 12, 15])
Playlist.create!(title: "They Might Be Giant....Hits!!", user_id: 2, song_ids: [16, 13, 1, 5])
Playlist.create!(title: "Vaudevillian Discotheque Villains", user_id: 3, song_ids: [14, 2, 3, 10])
Playlist.create!(title: "Noir Pop", user_id: 3, song_ids: [7, 4, 5, 9])
Playlist.create!(title: "Anger Management Classical Music", user_id: 4, song_ids: [8, 6, 11, 12])
Playlist.create!(title: "Popular Mechanics for Math Rock Enthusiasts", user_id: 4, song_ids: [13, 9, 4, 10])
Playlist.create!(title: "Martha Stewart's Favorites", user_id: 5, song_ids: [2, 12, 6])
Playlist.create!(title: "The Rutles Greatest Hits", user_id: 6, song_ids: [7, 8, 14])
Playlist.create!(title: "Dry Roasted Vince Guaraldi Sleepers", user_id: 6, song_ids: [6, 3, 14, 9])