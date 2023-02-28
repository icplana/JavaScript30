function play(e) {
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`)
    div.classList.add('playing')

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function stop(e){
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`)
    div.classList.remove('playing')

}
window.addEventListener('keydown',play)
window.addEventListener('keyup',stop)