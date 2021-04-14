const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// const songs = ['Al - Fatiha', 'Ar - Rahman'];
const songs = [
  'Al - Fatiha', 'Ar - Rahman',
  "80. 'Abasa",
  "81. At-Takwir",
  "82. Al-Infitar",
  "83. Al-Mutaffifin",
  "84. Al-Inshiqaq",
  "85. Al-Buruj",
  "86. At-Tariq",
  "87. Al-A'la",
  "88. Al-Ghashiyah",
  "89. Al-Fajr",
  "90. Al-Balad",
  "91. Ash-Shams",
  "92. Al-Layl",
  "93. Adh-Dhuha",
  "94. Al-Inshirah",
  "95. At-Tin",
  "96. Al-'Alaq",
  "97. Al-Qadr",
  "98. Al-Baiyinah",
  "99. Al-Zalzalah",
  "100. Al-'Adiyat",
  "101. Al-Qari'ah",
  "102. At-Takathur",
  "103. Al-'Asr",
  "104. Al-Humazah",
  "105. Al-Fil",
  "106. Quraish",
  "107. Al-Ma'un",
  "108. Al-Kauthar",
  "109. Al-Kafirun",
  "110. An-Nasr",
  "111. Al-Masad",
  "112. Al-Ikhlas",
  "113. Al-Falaq",
  "114. An-Nas",
];

//Keep track of songs
let songIndex = 1;

//Initially load song  info document
loadSong(songs[songIndex]);


//Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `Quran/${song}.mp3`;
  //cover.src = `img/${song}.jpg` jpg is not ready now!!!
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const {
    duration,
    currentTime
  } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
//EventListeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
})

//Change song  events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
