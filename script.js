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
let sname1 = document.getElementById('snam1');
let sname2 = document.getElementById('snam2');
let cov2 = document.getElementById('cov2');
let art2 = document.getElementById('art2');
let myprogressbar1 = document.getElementById('myprogressbar1');
let previous1 = document.getElementById('previous1');
let masterplay2 = document.getElementById('masterplay2');

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
        masterplay2.classList.remove('fa-circle-play');
        masterplay2.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        masterplay2.classList.remove('fa-circle-pause');
        masterplay2.classList.add('fa-circle-play');
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
               sname1.innerText = songs[songIndex].songName; // Update sname1
               sname2.innerText = songs[songIndex].songName; 
               cov.src = songs[songIndex].coverpath;
               cov2.src = songs[songIndex].coverpath; // Update cov2
               art.innerText = songs[songIndex].artist;
               art2.innerText = songs[songIndex].artist; // Update art2
               playIcon.classList.remove('fa-circle-play');
               playIcon.classList.add('fa-circle-pause');
               masterplay.classList.remove('fa-circle-play');
               masterplay.classList.add('fa-circle-pause');
               masterplay2.classList.remove('fa-circle-play');
               masterplay2.classList.add('fa-circle-pause');
        }

         else
          {
            playIcon.classList.remove('fa-circle-pause');
            playIcon.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            masterplay2.classList.remove('fa-circle-pause');
            masterplay2.classList.add('fa-circle-play');
            audioelement.pause();
            
            if(prevsongIndex!==songIndex)
            {
            audioelement.src = `songs/${songIndex + 1}.mp3`;
            audioelement.currentTime = 0;
            audioelement.play();
            gif.style.opacity = 1;
            masterSongName.innerText = songs[songIndex].songName;
            sname.innerText = songs[songIndex].songName;
            sname1.innerText = songs[songIndex].songName; // Update sname1
            sname2.innerText = songs[songIndex].songName; 
            cov.src = songs[songIndex].coverpath;
            cov2.src = songs[songIndex].coverpath; // Update cov2
            art.innerText = songs[songIndex].artist;
            art2.innerText = songs[songIndex].artist; // Update art2
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            masterplay2.classList.remove('fa-circle-play');
            masterplay2.classList.add('fa-circle-pause');
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
    sname1.innerText = songs[songIndex].songName; // Update sname1
    sname2.innerText = songs[songIndex].songName; 
    cov.src = songs[songIndex].coverpath;
    cov2.src = songs[songIndex].coverpath;
    art.innerText = songs[songIndex].artist;
    art2.innerText = songs[songIndex].artist;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    masterplay2.classList.remove('fa-circle-play');
    masterplay2.classList.add('fa-circle-pause');
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
    sname1.innerText = songs[songIndex].songName; // Update sname1
    sname2.innerText = songs[songIndex].songName;
    cov.src = songs[songIndex].coverpath;
    cov2.src = songs[songIndex].coverpath;
    art.innerText = songs[songIndex].artist;
    art2.innerText = songs[songIndex].artist;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    masterplay2.classList.remove('fa-circle-play');
    masterplay2.classList.add('fa-circle-pause');
})

function adjustImageWidth() {
    var items = document.querySelectorAll('.item');
    var maxWidth = 0;

    // Find the maximum width among all .item divs
    items.forEach(function(item) {
        maxWidth = Math.max(maxWidth, item.offsetWidth);
    });

    // Set the width of all .item divs and their pic images to the maximum width
    items.forEach(function(item) {
        var image = item.querySelector('.pic img');
        item.style.width = maxWidth + 'px';
        image.style.width = '100%'; // Set the image width to fill the parent div
    });
}

// Call the function when the window is resized
window.addEventListener('resize', adjustImageWidth);

// Call the function initially
adjustImageWidth();



// Event listener for masterplay2
document.getElementById('masterplay2').addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        masterplay2.classList.remove('fa-circle-play');
        masterplay2.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        masterplay2.classList.remove('fa-circle-pause');
        masterplay2.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

//Listen to events
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = ((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    myprogressbar1.value = progress;
})

myprogressbar1.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar1.value * audioelement.duration / 100;
})
// Event listener for next1
document.getElementById('next1').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    audioelement.src = `songs/${songIndex + 1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
    sname.innerText = songs[songIndex].songName;
    sname1.innerText = songs[songIndex].songName; // Update sname1
    sname2.innerText = songs[songIndex].songName; 
    cov.src = songs[songIndex].coverpath;
    cov2.src = songs[songIndex].coverpath; // Update cov2
    art.innerText = songs[songIndex].artist;
    art2.innerText = songs[songIndex].artist; // Update art2
    masterplay2.classList.remove('fa-circle-play');
    masterplay2.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

// Event listener for previous1
document.getElementById('previous1').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }

    audioelement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    sname.innerText = songs[songIndex].songName;
    sname1.innerText = songs[songIndex].songName; // Update sname1
    sname2.innerText = songs[songIndex].songName; 
    cov.src = songs[songIndex].coverpath;
    cov2.src = songs[songIndex].coverpath; // Update cov2
    art.innerText = songs[songIndex].artist;
    art2.innerText = songs[songIndex].artist; // Update art2
    masterplay2.classList.remove('fa-circle-play');
    masterplay2.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

document.getElementById('up').addEventListener('click', function() {
    // Change background-color of .second
    document.querySelector('.second').style.backgroundColor = 'rgba(13, 156, 185, 0.322)';
    
    // Show .second and .phone1
    document.querySelectorAll('.second , .phone1').forEach(function(element) {
        element.style.display = 'inline';
    });

    // Hide .bottom, .hide1, .fplay, .splay
    document.querySelectorAll('.bottom, .hide1, .phone2,.fplay, .splay').forEach(function(element) {
        element.style.display = 'none';
    });
});

document.getElementById('down').addEventListener('click', function() {

    document.querySelector('.second').style.backgroundColor = '#1b1919b6'; 
    document.querySelectorAll('.phone1').forEach(function(element) {
        element.style.display = 'none'; 
    });
    document.querySelectorAll(' .phone2,.hide1, .fplay, .splay').forEach(function(element) {
        element.style.display = 'inline';
    });

    document.querySelectorAll('.bottom').forEach(function(element) {
        element.style.display = 'flex';
    });
});
function adjustDisplay() {
    if (window.innerWidth > 600) {
        document.querySelector('.phone1').style.display = 'none';
        document.querySelector('.second').style.backgroundColor = '#1b1919b6'; 
        document.querySelectorAll('.phone1').forEach(function(element) {
            element.style.display = 'none'; 
        });
        document.querySelectorAll(' .phone2,.hide1, .fplay, .splay').forEach(function(element) {
            element.style.display = 'inline';
        });
    
        document.querySelectorAll('.bottom').forEach(function(element) {
            element.style.display = 'flex';
        });
    } 
}

// Call the adjustDisplay function when the page loads
adjustDisplay();

// Add event listener for the resize event
window.addEventListener('resize', adjustDisplay);