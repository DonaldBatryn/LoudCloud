# LoudCloud
## README

![LoudCloud logo](https://donnie-loudcloud-prod.s3.us-east-2.amazonaws.com/cloudSmallLogo.png)


Welcome to `LoudCloud`, my take on the popular music sharing website **SoundCloud**.

https://the-loudcloud.herokuapp.com/

This is my first full-stack application, utilizing a `Rails` backend and a `React` frontend 

The PostgreSQL database was seeded with music made **entirely by me!**

## User Login and Signup
----------
 - Full Frontend and Backend User Authentication
 - Modals for both Login and Signup
 - "Guest Login" with an animated effect
--------------

![login_example](app/assets/images/loginGif.gif)
-------------
## Music Streaming while Navigating Site
---------
- Song information and album artwork dynamically updated on the Playbar
- Click any album cover to play
---------------
![playbar_example](app/assets/images/playbarGif.gif)
-----------------
## Playlist Creation
--------
- Create, edit, and rock out to your own playlists
- Hear other user's playlists
-------------------
## Music Player
-----------
- I used the html `<audio>` tag along with Redux state to handle playing music
  

``` javascript
     handlePlay() {
        let player = document.getElementById("audio-player")
        player.setAttribute('src', this.props.song.song_url)

        if (this.props.paused === true) {
            this.props.play(this.props.song)
            player.play();
        } else if (this.props.paused === false && this.props.song.id !== this.props.currentSong.id) { 
            this.props.play(this.props.song)
            player.play();
        } else {
            this.props.pause();
            player.pause()
           
        }
    }
```
## Feel free to check out the site and **enjoy my tunes!** :)