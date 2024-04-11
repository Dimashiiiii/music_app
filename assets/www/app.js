const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");


const songs = [
  {
    title: "Cupid speed up",
    name: "Fifty Fifty",
    source: 
    "https://cdn22.deliciouspeaches.com/get/music/20230418/Fifty_Fifty_-_cupid_-_twin_version_speed_up_75811404.mp3"

  },
  {
    title: "Кристалл 2",
    name: "ELMAN, EDWARD",
    source:
      "https://ds2.cdn3.deliciouspeaches.com/get/music/20240223/ELMAN_EDWARD_-_Kristall_2_77482865.mp3",
  },
  {
    title: "Come and Get Your Love ",
    name: "Redbone",
    source:
      "https://ds2.cdn5.deliciouspeaches.com/get/music/20170902/Redbone_-_Come_And_Get_Your_Love_47979903.mp3",
  },
  {
    title: "Patriarkhat",
    name: "Matrang",
    source:
      "https://ds2.cdn22.deliciouspeaches.com/get/music/20210702/MATRANG_-_PATRIARKHAT_73024938.mp3",
  },
  {
    title: "Billie Jean",
    name: "Michael Jackson",
    source:
      "https://ds2.cdn14.deliciouspeaches.com/get/music/20170830/Michael_Jackson_-_Billie_Jean_47829972.mp3",
  },
  {
    title: "Ice ice Baby",
    name: "Vanilla Ice",
    source:
      "https://ds2.cdn21.deliciouspeaches.com/get/music/20170902/Vanilla_Ice_-_Ice_Ice_Baby_47966126.mp3",
  },

  {
    title: "SexyBack",
    name: "Justin Timberlake",
    source:
      "https://s3.deliciouspeaches.com/get/music/20180724/Justin_Timberlake_-_SexyBack_57576339.mp3",
  },
  {
    title: "So Innocent",
    name: "Shiloh Dynasty",
    source:
      "https://deliciouspeaches.com/get/music/20230315/Shiloh_Dynasty_-_So_Innocent_75608832.mp3",
  },
  {
    title: "Dykn dykn",
    name: "Khan Dosaev",
    source:
    "https://s2.deliciouspeaches.com/get/music/20200311/KHan_Dosaev_-_Dykn_Dykn_Baspen_dombyra_68726584.mp3"
  },
  {
    title: "XXXX",
    name: "Khan Dosaev",
    source: 
    "https://s3.deliciouspeaches.com/get/music/20190629/KHan_Dosaev_-_Trusimen_sekremn_61285870.mp3"
  },
  {
    title: "Do luny",
    name: "Shami",
    source:
    "https://cdn22.deliciouspeaches.com/get/music/20230811/Shami_-_Do_Luny_76541993.mp3"
  },
  {
    title: "Na grani",
    name: "Janaga, Sevak",
    source:
    "https://cdn4.deliciouspeaches.com/get/music/20230728/Janaga_Sevak_-_Na_grani_76440887.mp3"
  },
  {
    title: "Te Llenaste",
    name: "El Alfa, Yomel El Meloso & El Fother",
    source:
    "https://cdn15.deliciouspeaches.com/get/music/20240303/El_Alfa_Yomel_El_Meloso_El_Fother_-_TE_LLENASTE_77527104.mp3"
  },
  {
    title: "Suparo Speed UP",
    name: "Wayne Flenory",
    source: 
    "https://cdn9.deliciouspeaches.com/get/music/20230912/Wayne_Flenory_-_Suparo_Speed_Up_76671205.mp3"
  },
  {
    title: "Auyldyn qyzy",
    name: "QaraKesek",
    source:
    "https://s2.deliciouspeaches.com/get/music/20211026/QaraKesek_-_Auyldy_yzy_73222898.mp3"
  },
  {
    title: "enough",
    name: "eternxlkz",
    source: 
    "https://cdn6.deliciouspeaches.com/get/music/20240121/Eternxlkz_-_ENOUGH_77315383.mp3"
  },
  {
    title: "Gone Gone Gone",
    name: "Phillip Phillips",
    source:
    "https://s2.deliciouspeaches.com/get/music/20190528/Phillip_Phillips_-_Gone_Gone_Gone_64567356.mp3"
  },
  {
    title: "Home",
    name: "Phillip Phillips",
    source:
    "https://www.youtube.com/watch?v=HoRkntoHkIE&ab_channel=PhilPhillipsVEVO"
  }
];


let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
