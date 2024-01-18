document.getElementById('play-button').addEventListener('click', function() {
    var video = document.getElementById('custom-video');
    
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
