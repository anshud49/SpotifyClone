console.log("Welcome to spotify")

let songIndex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let sname = document.getElementById('snam');
let cov = document.getElementById('cov');
let art = document.getElementById('art');
let stime = document.getElementById('starttime');
let etime = document.getElementById('endtime');
let songs = [
    { songName: "Duniya Kisi Ke Pyar me", artist: "Mehdi Hassan", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Ehsaan Tera Hoga Mujh Par", artist: "Mohammed Rafi, Lata Mangeshkar", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Sajna Barse Hai", artist: "Ustad Rashid Khan Sahab", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Lag Ja Gale", artist: "Lata Mangeshkar", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Ye Dil Tum Bin", artist: "Lata Mangeshkar", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Do dil mil rahe", artist: "Kumar Sanu", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "Ye Jo Halka Halka", artist: "Nustrat Fateh Ali Khan Sahab", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "Achha Ji Main Haari", artist: "Mohammed Rafi", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songName: "Ye Haseen Vadiya ", artist: "S.P. Balasubrahmanyam", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songName: "Tu Hi Re", artist: "Hari Haran Ji", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" }
]

songitems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname").innerText = songs[i].songName;
})
// audioelement.play();

//play pause buttons
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})



//Listen to events
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = ((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})


const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        let prevsongIndex=songIndex;

        songIndex = parseInt(e.target.id);
        const playIcon = e.target;

        
        if ( audioelement.paused || audioelement.currentTime <= 0) {

            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            audioelement.src = `songs/${songIndex + 1}.mp3`;
            if(prevsongIndex!==songIndex)
               audioelement.currentTime = 0;
            audioelement.play();
            gif.style.opacity = 1;
            masterSongName.innerText = songs[songIndex].songName;
            sname.innerText = songs[songIndex].songName;
            cov.src = songs[songIndex].coverpath;
            art.innerText = songs[songIndex].artist;
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

        }

         else
          {
            playIcon.classList.remove('fa-circle-pause');
            playIcon.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            audioelement.pause();
            if(prevsongIndex!==songIndex)
            {
            audioelement.src = `songs/${songIndex + 1}.mp3`;
            audioelement.currentTime = 0;
            audioelement.play();
            gif.style.opacity = 1;
            masterSongName.innerText = songs[songIndex].songName;
            sname.innerText = songs[songIndex].songName;
            cov.src = songs[songIndex].coverpath;
            art.innerText = songs[songIndex].artist;
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            }
            
        }

    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioelement.src = `songs/${songIndex + 1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
    sname.innerText = songs[songIndex].songName;
    cov.src = songs[songIndex].coverpath;
    art.innerText = songs[songIndex].artist;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }

    audioelement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    sname.innerText = songs[songIndex].songName;
    cov.src = songs[songIndex].coverpath;
    art.innerText = songs[songIndex].artist;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})