const buttonPlayPause = document.getElementById("play-pause");
const forwardbutton = document.getElementById("next");
const backButton = document.getElementById("previous");
const chapterName = document.getElementById("chapter");
const audioChapter = document.getElementById("audio-chapter");

const numbers = 12;
let playing = 0;
let chapter = 1;

function playTrack() {
    audioChapter.play();
    buttonPlayPause.classList.remove("bi-play-circle-fill");
    buttonPlayPause.classList.add("bi-pause-circle-fill");
}
function pauseTrack() {
    audioChapter.pause();
    buttonPlayPause.classList.add("bi-play-circle-fill");
    buttonPlayPause.classList.remove("bi-pause-circle-fill");
}
function  PlayOrPause() {
    if (playing === 0) {
        playTrack();
        playing = 1;
    } else {
        pauseTrack();
        playing = 0;
    }
}

function ChangeTrackName() {
    chapterName.innerText = 'Chapter ' + chapter;
}

function NextTrack() {
    if (chapter === numbers) {
        chapter = 1;
    } else {
        chapter = chapter + 1
    }
    audioChapter.src = "./books/jurassic-park/" + chapter + '.mp3';
    playTrack();
    playing = 1;
    ChangeTrackName();
}

function BackTrack() {
    if (chapter === 1 ) {
        chapter = numbers;
    } else {
        chapter = chapter - 1
    }
    audioChapter.src = "./books/jurassic-park/" + chapter + '.mp3';
    playTrack();
    playing = 1;
    ChangeTrackName()
}

buttonPlayPause.addEventListener("click", PlayOrPause);
forwardbutton.addEventListener("click", NextTrack);
backButton.addEventListener("click", BackTrack);