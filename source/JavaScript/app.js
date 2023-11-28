//* get start code javascript from music player...
//* select element document => $ && select element let
let $ = document;
//* variable Flag defining
let isPlay = false; 
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
const btnPlay = $.querySelector(".btn-Play");
const btnNext = $.querySelector(".btn-next");
const btnRepeat = $.querySelector(".btn-repeat");
 
