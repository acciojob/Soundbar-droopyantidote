// Function to play a sound
function playSound(soundFileName) {
    var audio = new Audio('sounds/' + soundFileName);
    audio.play();
}

// Function to stop all sounds
function stopAllSounds() {
    var sounds = document.querySelectorAll('audio');
    sounds.forEach(function(sound) {
        sound.pause();
        sound.currentTime = 0;
    });
}
