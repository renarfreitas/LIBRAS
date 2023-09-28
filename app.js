var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active')

    if(play.paused ){
        play.play() 

        location.reload()
    } else {
        play.pause()
        play.currentTime = 0

        location.reload()
    }
}))