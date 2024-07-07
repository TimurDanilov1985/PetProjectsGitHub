const player = document.querySelector('.player__video__window');
const playButton = document.querySelector('#play');
const stopButton = document.querySelector('#stop');
const muteButton = document.querySelector('#mute');
const progress = document.querySelector('#progress');
const volume = document.querySelector('#volume');
const fullScreenButton = document.querySelector('#fullScreen');
const playerBlock = document.querySelector('.player__video');
let logic = 0;
let logic1 = 0;
let p1 = document.querySelector('#p1');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p6 = document.querySelector('#p6');
let videoTime = 0;
let minutes = 0;
let seconds = 0;
let videoTime1 = 0;
let minutes1 = 0;
let seconds1 = 0;


player.addEventListener('loadeddata', function (e) {

    videoTime = Math.floor(player.duration);
    minutes = Math.floor(videoTime / 60);
    seconds = videoTime % 60;
    console.log(videoTime);
    console.log(minutes);
    console.log(seconds);

    if(minutes < 10) {
        p4.textContent = '0' + minutes;
    } else {
        p4.textContent = minutes;
    }

    if(seconds < 10) {
        p6.textContent = '0' + seconds;
    } else {
        p6.textContent = seconds;
    }

    progress.setAttribute('max', `${videoTime}`)

});

player.addEventListener('timeupdate', function (e) {
    videoTime1 = Math.floor(player.currentTime);
    minutes1 = Math.floor(videoTime1 / 60);
    seconds1 = videoTime1 % 60;

    if(minutes1 < 10) {
        p1.textContent = '0' + minutes1;
    } else {
        p1.textContent = minutes1;
    }

    if(seconds1 < 10) {
        p3.textContent = '0' + seconds1;
    } else {
        p3.textContent = seconds1;
    }

    progress.value = player.currentTime;

});

playButton.addEventListener('click', function (e) {
    if (logic1 === 0) {
        player.play();
        playButton.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.011 9.011 0 0 1 -9 9z"></path><path d="m9 8h2v8h-2z"></path><path d="m13 8h2v8h-2z"></path></svg>';
        logic1 = 1;
    } else {
        player.pause();
        playButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve"><g><path d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"></path><polygon points="181.062,336.575 343.938,242.5 181.062,148.425 "></polygon></g></svg>';
        logic1 = 0;
    }
});

stopButton.addEventListener('click', function (e) {
    player.pause();
    player.currentTime = 0;
    if (logic1 === 1) {
        playButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve"><g><path d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"></path><polygon points="181.062,336.575 343.938,242.5 181.062,148.425 "></polygon></g></svg>';
    }
    logic1 = 0;
});

progress.addEventListener('click', function (e) {
    player.currentTime = (videoTime / 200) * e.offsetX;
});

muteButton.addEventListener('click', function (e) {
    if (logic === 0) {
        player.muted = true;
        muteButton.innerHTML = '<svg id="Layer_2" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path d="m16 2c-7.72998 0-14 6.26996-14 14 0 7.72998 6.27002 14 14 14s14-6.27002 14-14c0-7.73004-6.27002-14-14-14zm1.97998 21.28998c0 .33002-.19.63-.46997.78003-.13.06-.27002.08997-.40002.08997-.17999 0-.35999-.04999-.51001-.15997l-4.84998-3.43h-3.88c-.47998 0-.87-.39001-.87-.87v-7.40002c0-.47998.39001-.87.87-.87h3.88l4.84998-3.44c.27002-.17999.62-.21002.91003-.06.27997.14996.46997.45001.46997.77997zm6.76001-5.77997c.35004.34998.35004.89996 0 1.23999-.16998.16998-.39001.25-.60999.25-.22003 0-.45001-.08002-.62-.25l-1.51-1.52002-1.52002 1.52002c-.16998.16998-.38995.25-.60998.25-.22998 0-.45001-.08002-.62-.25-.34003-.34003-.34003-.89001 0-1.23999l1.52002-1.51001-1.52002-1.52002c-.34003-.33997-.34003-.89001 0-1.22998.34003-.34003.89001-.34003 1.22998 0l1.52002 1.51996 1.51001-1.51996c.33997-.34003.89001-.34003 1.22998 0 .35004.33997.35004.89001 0 1.22998l-1.51001 1.52002z"></path></g></svg>';
        logic = 1;

    } else {
        player.muted = false;
        muteButton.innerHTML = '<svg id="Layer_2" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path d="m16 2c-7.72998 0-14 6.26996-14 14 0 7.72998 6.27002 14 14 14s14-6.27002 14-14c0-7.73004-6.27002-14-14-14zm1.96997 21.28998c0 .33002-.17999.63-.46997.78003-.12.07001-.26001.08997-.40002.08997-.16998 0-.34998-.04999-.5-.14996l-4.84998-3.44h-3.88c-.47998 0-.87-.39001-.87-.87v-7.40002c0-.47003.39001-.87.87-.87h3.88l4.84998-3.44c.27002-.18.61999-.21003.90002-.05.28998.13995.46997.44.46997.76996zm2.12006-4.52997c-.22003 0-.45001-.09003-.62006-.26001-.33997-.33002-.33997-.89001 0-1.23004.34003-.33997.53003-.78998.53003-1.26996 0-.48004-.19-.92999-.53003-1.27002-.33997-.33997-.33997-.89001 0-1.22998.35004-.34003.90002-.34003 1.24005 0 .66998.66998 1.02997 1.54999 1.02997 2.5s-.35999 1.83997-1.02997 2.5c-.17004.16998-.40002.26001-.61999.26001zm2.81994 2.28998c-.16998.16998-.38995.26001-.62.26001-.21997 0-.44-.09003-.60999-.26001-.33997-.33002-.33997-.89001-.01001-1.22998 1.03003-1.02002 1.59003-2.38 1.59003-3.82001s-.56-2.79999-1.59003-3.82001c-.32996-.34003-.32996-.90002.01001-1.22998.34003-.34003.89001-.34003 1.22998 0 1.35005 1.34998 2.09004 3.14997 2.09004 5.04999 0 1.89996-.73999 3.70001-2.09003 5.04999z"></path></g></svg>';
        logic = 0;
    }
});

volume.addEventListener('click', function (e) {
    volume.value = e.offsetX;
    player.volume =  e.offsetX / 100;
});

fullScreenButton.addEventListener('click', function (e) {
    playerBlock.requestFullscreen();
});

const blobUrl = "blob:https://vk.com/38edfa5b-ce84-4f5c-b09c-7e2194eef6ad";
