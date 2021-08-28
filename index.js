

function playNote(){
    document.addEventListener("keydown", (e) => {
        console.log(e.key)
        const audio = document.querySelector(`audio[data-key="${e.key}"]`)
        if(!audio) return;///
        audio.play()
    })
}