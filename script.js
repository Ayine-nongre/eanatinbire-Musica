let songs = [
    {
        name: 'Unity ft Walkers',
        artist: 'Alan Walker',
        path: './assets/Alan Walker - Unity ft. Walkers.mp3'
    },

    {
        name: 'Total eclipse of the heart',
        artist: 'Bonnie Tyler',
        path: 'assets/Bonnie Tyler - Total Eclipse of the Heart (Official).mp3'
    },

    {
        name: 'For my hand',
        artist: 'Burna Boy',
        path: 'assets/Burna Boy - For My Hand feat. Ed Sheeran.mp3'
    }
]
 
var i = 0
var song = songs[i]


function play(){
    document.querySelector('.song_t').innerHTML = song.name
    document.querySelector('.artist').innerHTML = song.artist
    document.getElementById('audio-src').src = song.path
    document.getElementById('audio-src').play()
    document.querySelector('.music-seek-bar').max = document.getElementById('audio-src').duration
    document.querySelector('.music-seek-bar').value = document.getElementById('audio-src').currentTime
}

function next(){
    i++
    song = songs[i]
    document.querySelector('.song_t').innerHTML = song.name
    document.querySelector('.artist').innerHTML = song.artist
    document.getElementById('audio-src').src = song.path
    document.getElementById('audio-src').play()
}

function previous(){
    i--
    song = songs[i]
    document.querySelector('.song_t').innerHTML = song.name
    document.querySelector('.artist').innerHTML = song.artist
    document.getElementById('audio-src').src = song.path
    document.getElementById('audio-src').play()
}

