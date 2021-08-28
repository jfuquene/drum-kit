

function playNote(){
    document.addEventListener("keydown", (e) => {
        console.log(e.key)
        const audio = document.querySelector(`audio[data-key="${e.key}"]`)
        console.log(audio)
        if(!audio) return;///
        audio.play()
    })
}
playNote()