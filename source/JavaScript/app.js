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
     // invoked
     loadDescriptionSongHandler(countSong);
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
     // invoked 
     loadDescriptionSongHandler(countSong);
}



// load Description Song or Music :-    
function loadDescriptionSongHandler (count) {
     coverMusic.src = listSong[count].coverIMG;
     nameSong.innerHTML = listSong[count].nameSong;
     nameSonger.innerHTML = listSong[count].nameSonger;
}


// time update audio Currently playing :- 
function getTimeUpdateHandler (e) {
     if (isPlay) {
          // progress update Time bar :- --> 1%.....100%
          let durationTime = e.srcElement.duration;
          let currentTime = e.srcElement.currentTime;
          let progressBar = (currentTime / durationTime) * 100;

          progressTimeLine.style.width = `${progressBar.toFixed(0)}%`;

          // process duration,current time update :-
          // (durationTime) The whole time of the music :
          let durationMinutes = Math.floor((durationTime / 60));  // convert seconds to minutes
          let durationSeconds = Math.floor((durationTime % 60));   // return time all seconds audio

          // durationMinutes < 10 : +0 && durationSeconds < 10 : +0
          if (durationMinutes < 10) {
               durationMinutes = `0${durationMinutes}`;
          } else if (durationSeconds < 10) {
               durationSeconds = `0${durationSeconds}`;
          }
          
          // fixed bug or display show NAN 
          if (durationSeconds) {
               console.log("The whole time of the music :" + durationMinutes + ":" + durationSeconds);
               displayDurationTime.innerHTML = `${durationMinutes}:${durationSeconds}`;
          }

     }
}


// add EventListener for msuic Playr :-
btnPlay.addEventListener("click" , getCheckMusicHandler);
btnNext.addEventListener("click" , getNextMusicHandler);
btnPrevious.addEventListener("click" , getPreviousMusicHandler);
audio.addEventListener("timeupdate" , getTimeUpdateHandler);