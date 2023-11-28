//* get start code javascript from music player...
//* select element document => $ && select element let
let $ = document;
//* variable Flag defining
let isPlay = false; 
let countSong = 0;
let currentlly = "";
//* select element Const
const coverMusic = $.querySelector(".image-cover");
const audio = $.querySelector("audio");
const progressTimeLine = $.querySelector(".progress-time-bar");
const displayDurationTime = $.querySelector(".durationTime");
const displayCurrentTime = $.querySelector(".currentTime");
const nameSong = $.querySelector(".name-song");
const nameSonger = $.querySelector(".name-songer");
//* selecte button's music player
const btnHeart = $.querySelector(".btn-heart");
const btnPrevious = $.querySelector(".btn-Previous");
const btnPlay = $.querySelector(".btn-play");
const btnNext = $.querySelector(".btn-next");
const btnRepeat = $.querySelector(".btn-repeat");

//* Create list music player
const listSong = [
     {
          id:1,
          nameSong:"Nistametoon",
          nameSonger:"MohammadReza Shayea",
          src:"./music/01-Nistametoon.mp3",
          coverIMG:"./public/image/img-cover-1.jpg",
     },
     {
          id:2,
          nameSong:"Khiz",
          nameSonger:"MohammadReza Shayea",
          src:"./music/02-Khiz.mp3",
          coverIMG:"./public/image/img-cover-2.jpg",
     },
     {
          id:3,
          nameSong:"Khab Nabashim",
          nameSonger:"MohammadReza Shayea",
          src:"./music/03-Khab Nabashim.mp3",
          coverIMG:"./public/image/img-cover-3.jpg",
     }
];


// play Music :-
function getPlayMusicHandler () {
     btnPlay.innerHTML = `<i class="fa fa-3x fa-pause-circle"></i>`;
     audio.play();
     isPlay = true;
}

// pause Music :-
function getPauseMusicHandler () {
     btnPlay.innerHTML = `<i class="fa fa-3x fa-play-circle"></i>`;
     audio.pause();
     isPlay = false;
}

// what is playing or paused :-
function getCheckMusicHandler () {
     if (isPlay) {
          getPauseMusicHandler();
          // play play - isplay : true
     } else {
          getPlayMusicHandler();
          // pause music - isplay : false
     }
}


// next music :-
function getNextMusicHandler () {
     countSong++;
     if (countSong > listSong.length - 1) {
          countSong = 0;
     }
     currentlly = listSong[countSong].src;
     audio.setAttribute("src" , currentlly);
     audio.play();
     isPlay = true;
     btnPlay.innerHTML = `<i class="fa fa-3x fa-pause-circle"></i>`;
} 


// previous music :-
function getPreviousMusicHandler () {
     countSong--;
     if (countSong < 0) {     
          countSong = listSong.length - 1;
     } 
     currentlly = listSong[countSong].src;
     audio.setAttribute("src" , currentlly);
     audio.play();
     isPlay = true;
     btnPlay.innerHTML = `<i class="fa fa-3x fa-pause-circle"></i>`;
}



// add EventListener for msuic Playr :-
btnPlay.addEventListener("click" , getCheckMusicHandler);
btnNext.addEventListener("click" , getNextMusicHandler);
btnPrevious.addEventListener("click" , getPreviousMusicHandler);