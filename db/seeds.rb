require 'open-uri'
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


user1 = User.create!(username: "Guest", email: "guest@loudcloud.com", password: "123456")
user2 = User.create!(username: "Donnie", email: "donald.batryn@gmail.com", password: "123456")
user3 = User.create!(username: "Polly", email: "polly@gmail.com", password: "123456")
user4 = User.create!(username: "Andy", email: "andy@gmail.com", password: "123456")
user5 = User.create!(username: "Trevor", email: "trevor@gmail.com", password: "123456")
user6 = User.create!(username: "Ivo", email: "ivo@gmail.com", password: "123456")
user7 = User.create!(username: "Anis", email: "Anis@gmail.com", password: "123456")
user8 = User.create!(username: "Daniel", email: "Daniel@gmail.com", password: "123456")
user9 = User.create!(username: "Jon", email: "jon@gmail.com", password: "123456")
user10 = User.create!(username: "Jesse", email: "jwong@gmail.com", password: "123456")
user11 = User.create!(username: "Allen", email: "allen@gmail.com", password: "123456")



song1 = Song.create!(title: 'Mind-Out', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: user2.id, description: 'Straight up fun!')
song2 = Song.create!(title: 'Where We Go We Go', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: user3.id, description: 'A dancy bouncy rocker')
song3 = Song.create!(title: 'Light Yr Life', album_name: 'I/O', artist: 'mtvghosts', user_id: user6.id, description: 'Soulful electro madness')
song4 = Song.create!(title: "She's Really Mine", album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: user2.id, description: 'A pop masterpiece in the flavor of rock')
song5 = Song.create!(title: 'Rock Bottom Goodbye', album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: user4.id, description: 'A warm and rich choir of Donnies')
song6 = Song.create!(title: 'You Shouldnt Be Sad', album_name: 'Tri-Pop', artist: 'mtvghosts', user_id: user8.id, description: 'A cover of the Kinks!')
song7 = Song.create!(title: 'Chariot Riding Proletariat', album_name: 'Dystopio', artist: 'mtvghosts', user_id: user6.id, description: 'Anti-government guitar power man!')
song8 = Song.create!(title: 'In My Dream Tonite', album_name: 'Dystopio', artist: 'mtvghosts', user_id: user2.id, description: 'Surreal sad dream where you sang in a 70s big band')
song9 = Song.create!(title: 'Gossip Ghost', album_name: 'Dystopio', artist: 'mtvghosts', user_id: user4.id, description: 'Sentimental tune about caring')
song10 = Song.create!(title: 'Diver, I Hope Yr Not', album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: user4.id, description: 'Nu-pop ode to Brian Wilson')
song11 = Song.create!(title: "Jane's Fantasy Game", album_name: 'Dreampunk', artist: 'mtvghosts', user_id: user6.id, description: 'Inspired by Enders Game')
song12 = Song.create!(title: 'bbitellu', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: user7.id, description: 'A dancy bouncy funk pop n roll')
song13 = Song.create!(title: 'Motivation Killer', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: user3.id, description: 'Glam hate your job stuff')
song14 = Song.create!(title: 'Deep Thought', album_name: 'Dreampunk', artist: 'mtvghosts', user_id: user2.id, description: 'Alt-dance-pop with sweet lush vocals')
song15 = Song.create!(title: "I'm Seeing Stars", album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: user1.id, description: 'A warped voice heeds warning')
song16 = Song.create!(title: "The Five Sides of Time", album_name: 'The Five 5ides of Time', artist: 'mtvghosts', user_id: user2.id, description: 'Hi Speed')

# open song files
mp3_2 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Where+We+Go+We+Go.mp3") 
mp3_1 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Mind+Out.mp3") 
mp3_3 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Lyte+Yr+Life+(done).mp3") 
mp3_4 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/She's+Really+Mine.mp3") 
mp3_5 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Rock+Bottom+Goodbye.mp3") 
mp3_6 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/You+Shouldn't+Be+Sad.mp3") 
mp3_7 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Chariot+Riding+Proletariat.mp3") 
mp3_8 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/In+My+Dream+Tonite.mp3") 
mp3_9 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Gossip+Ghost.mp3")
mp3_10 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/diver_i_hope_yr_not.mp3")
mp3_11 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Jane's+Fantasy+Game+D1.mp3")
mp3_12 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/bbitellu.mp3")
mp3_13 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Motivation+Killer.mp3")
mp3_14 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/Deep+Thought+(betteryet).mp3")
mp3_15 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/I'm+Seeing+Stars.mp3")
mp3_16 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/The+Five+Sides+of+Time.mp3")


# attach song files
song1.audio.attach(io: mp3_1, filename: "song1.mp3") 
song2.audio.attach(io: mp3_2, filename: "song2.mp3") 
song3.audio.attach(io: mp3_3, filename: "song3.mp3") 
song4.audio.attach(io: mp3_4, filename: "song4.mp3") 
song5.audio.attach(io: mp3_5, filename: "song5.mp3") 
song6.audio.attach(io: mp3_6, filename: "song6.mp3") 
song7.audio.attach(io: mp3_7, filename: "song7.mp3") 
song8.audio.attach(io: mp3_8, filename: "song8.mp3") 
song9.audio.attach(io: mp3_9, filename: "song9.mp3")
song10.audio.attach(io: mp3_10, filename: "song10.mp3")
song11.audio.attach(io: mp3_11, filename: "song11.mp3")
song12.audio.attach(io: mp3_12, filename: "song12.mp3")
song13.audio.attach(io: mp3_13, filename: "song13.mp3")
song14.audio.attach(io: mp3_14, filename: "song14.mp3")
song15.audio.attach(io: mp3_15, filename: "song15.mp3")
song16.audio.attach(io: mp3_16, filename: "song16.mp3")

# open image files
jpg_1 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/5idesCover.jpg") 
jpg_2 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/5idesCover.jpg") 
jpg_3 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/ioCover.jpg") 
jpg_4 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/tripopCover.jpg") 
jpg_5 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/tripopCover.jpg") 
jpg_6 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/tripopCover.jpg") 
jpg_7 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/altCover2.jpg") 
jpg_8 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/altCover2.jpg") 
jpg_9 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/altCover2.jpg")
jpg_10 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/5idesCover.jpg")
jpg_11 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/altCover.jpg")
jpg_12 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/ioCover.jpg")
jpg_13 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/ioCover.jpg")
jpg_14 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/altCover.jpg")
jpg_15 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/5idesCover.jpg")
jpg_16 = open("https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/5idesCover.jpg")

# attach image files
song1.image.attach(io: jpg_1, filename: "image1.jpg") 
song2.image.attach(io: jpg_2, filename: "image2.jpg") 
song3.image.attach(io: jpg_3, filename: "image3.jpg") 
song4.image.attach(io: jpg_4, filename: "image4.jpg") 
song5.image.attach(io: jpg_5, filename: "image5.jpg") 
song6.image.attach(io: jpg_6, filename: "image6.jpg") 
song7.image.attach(io: jpg_7, filename: "image7.jpg") 
song8.image.attach(io: jpg_8, filename: "image8.jpg") 
song9.image.attach(io: jpg_9, filename: "image9.jpg")
song10.image.attach(io: jpg_10, filename: "image10.jpg")
song11.image.attach(io: jpg_11, filename: "image11.jpg")
song12.image.attach(io: jpg_12, filename: "image12.jpg")
song13.image.attach(io: jpg_13, filename: "image13.jpg")
song14.image.attach(io: jpg_14, filename: "image14.jpg")
song15.image.attach(io: jpg_15, filename: "image15.jpg")
song16.image.attach(io: jpg_16, filename: "image16.jpg")

Playlist.create!(title: "Weird Jams", user_id: user2.id, song_ids: [song1.id, song4.id, song7.id, song9.id])
Playlist.create!(title: "Summertime Sad-Songs", user_id: user6.id, song_ids: [song2.id, song5.id, song8.id, song10.id])
Playlist.create!(title: "Shoutin at the Sun", user_id: user2.id, song_ids: [song3.id, song6.id, song9.id, song11.id])
Playlist.create!(title: "Mellow Yellow Donovan Tribute", user_id: user7.id, song_ids: [song4.id, song9.id, song12.id, song15.id])
Playlist.create!(title: "They Might Be Giant....Hits!!", user_id: user2.id, song_ids: [song16.id, song13.id, song1.id, song5.id])
Playlist.create!(title: "Vaudevillian Discotheque Villains", user_id: user3.id, song_ids: [song14.id, song2.id, song3.id, song10.id])
Playlist.create!(title: "Noir Pop", user_id: user3.id, song_ids: [song7.id, song4.id, song5.id, song9.id])
Playlist.create!(title: "Anger Management Classical Music", user_id: user4.id, song_ids: [song8.id, song6.id, song11.id, song12.id])
Playlist.create!(title: "Popular Mechanics for Math Rock Enthusiasts", user_id: user4.id, song_ids: [song13.id, song9.id, song4.id, song10.id])
Playlist.create!(title: "Martha Stewart's Favorites", user_id: user5.id, song_ids: [song2.id, song12.id, song6.id])
Playlist.create!(title: "The Rutles Greatest Hits", user_id: user6.id, song_ids: [song7.id, song8.id, song14.id])
Playlist.create!(title: "Dry Roasted Vince Guaraldi Sleepers", user_id: user6.id, song_ids: [song6.id, song3.id, song14.id, song9.id])