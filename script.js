document.addEventListener('DOMContentLoaded', function() {
    let likeButton = document.getElementById('like-btn');
    let likeCountDisplay = document.getElementById('like-count');
    let likeCount = 0;

    likeButton.addEventListener('click', function() {
        likeCount++;
        likeCountDisplay.textContent = likeCount;
    });
});

