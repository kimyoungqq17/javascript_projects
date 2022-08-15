const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const myAudio = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
// Current Song
let songIndex = 0;

// Music
const songs = [
    {
        name: 'jacinto-1',
        title: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-2',
        title: 'Second Song',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-3',
        title: 'third song',
        artist: 'Jacinto Design'
    },
    {
        name: 'metric-1',
        title: 'Front Row (remix)',
        artist: 'Jacinto Design'
    }
];

// Add song metadata to DOM
const addSongData = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    myAudio.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
};

//  Default song is not playing
isPlaying = false

// Play
const playSong = () => {
    isPlaying = true;
    myAudio.play();
    playButton.classList.replace('fa-play', 'fa-pause');
    playButton.setAttribute('title', 'Pause')
}

const pauseSong = () => {
    isPlaying = false;
    myAudio.pause();
    playButton.classList.replace('fa-pause','fa-play' );
    playButton.setAttribute('title', 'Play')
}

const nextSong = () => {
    songIndex === songs.length-1 ? songIndex = 0 : songIndex++;
    addSongData(songs[songIndex]);
    playSong();
};

const previousSong = () => {
    songIndex === 0 ? songIndex = songs.length : songIndex-1;
    songIndex--;
    console.log(songIndex);
    addSongData(songs[songIndex]);
    playSong();
};

const updateProgressBar = (e) => {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime/duration * 100);
        progress.style.width = `${progressPercent}%`;
        // Calculate display for duration
        const durationMinutes = Math.floor(duration/60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        };
        durationMinutes ? durationEl.textContent = (`${durationMinutes}:${durationSeconds}`) : null
        // Calculate Current time
        let currentMinutes = Math.floor(currentTime/60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        };
        currentTimeEl.textContent = (`${currentMinutes}:${currentSeconds}`);
     }
};

// Set Progress Bar
function setProgressbar(e) {
    // console.log(e);
    const progBarWidth = this.clientWidth;
    const progBarClickedPosition = e.offsetX;
    progress.style.width = `${progBarClickedPosition/progBarWidth * 100}%`;
    const { duration } = myAudio;
    myAudio.currentTime = progBarClickedPosition/progBarWidth * duration;
 }

//  Eventlisteners
playButton.addEventListener('click', () => isPlaying ? pauseSong() : playSong() );
previousButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);
myAudio.addEventListener('timeupdate', updateProgressBar);
myAudio.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgressbar);

// On Load - Select first song
addSongData(songs[songIndex]);

