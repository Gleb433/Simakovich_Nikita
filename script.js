var playButton = document.getElementById('play-button');
var videoOverlay = document.getElementById('video-overlay');
var closeButton = document.getElementById('close-button');
var blackSquare = document.getElementById('black-square');
var customVideo = document.getElementById('custom-video');

playButton.addEventListener('click', function() {
    blackSquare.style.display = 'none'; // Скрыть черный квадрат с кнопкой
    videoOverlay.style.zIndex = 1000; // Поднять видео-оверлей на верхний уровень
    videoOverlay.style.display = 'flex'; // Показать видео-оверлей
    customVideo.play(); // Воспроизвести видео
});

closeButton.addEventListener('click', function() {
    closeVideo();
});

document.addEventListener('click', function(event) {
    if (event.target === videoOverlay) {
        closeVideo();
    }
});

function closeVideo() {
    blackSquare.style.display = 'flex'; // Показать черный квадрат с кнопкой
    videoOverlay.style.zIndex = -1; // Опустить видео-оверлей на нижний уровень
    videoOverlay.style.display = 'none'; // Скрыть видео-оверлей
    customVideo.pause(); // Поставить видео на паузу
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
});

customVideo.addEventListener('ended', function() {
    blackSquare.style.display = 'flex'; // Показать черный квадрат с кнопкой после завершения видео
    videoOverlay.style.zIndex = -1; // Опустить видео-оверлей на нижний уровень
    videoOverlay.style.display = 'none'; // Скрыть видео-оверлей
});