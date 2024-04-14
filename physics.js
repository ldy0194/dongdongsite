function calculatePhysics() {
    var distance = document.getElementById('distanceInput').value;
    var time = document.getElementById('timeInput').value;

    if (distance === '' || time === '' || time <= 0) {
        alert("올바른 거리와 시간을 입력해주세요.");
        return;
    }

    var velocity = distance / time;
    var speed = Math.abs(velocity);
    var acceleration = velocity / time;

    document.getElementById('velocityResult').textContent = velocity.toFixed(2) + ' m/s';
    document.getElementById('speedResult').textContent = speed.toFixed(2) + ' m/s';
    document.getElementById('accelerationResult').textContent = acceleration.toFixed(2) + ' m/s²';
}
let currentIndex = parseInt(localStorage.getItem('videoIndex')) || 0; 
document.addEventListener('DOMContentLoaded', function() {
    const videoIDs = ["SaMWc630CPw", "F18UvZzbagE", "NUxtgicSCcQ"];
    const videoTitles = [
      "'물리야말로 근본입니다' 서울대 물리교육과 이규철의 물리 입문 강의 | 패션이과 물리학 편",
      "물리1 1단원 개념 완벽 정리",
      "'물리 개쉽네 아ㅋㅋ' 서울대 박사 학생 처리에게 듣는 물리 속성 강의"
    ];

    let currentIndex = parseInt(localStorage.getItem('videoIndex')) || 0;

    const iframes = document.querySelectorAll('.video-wrapper iframe');
    const videoDescriptionElement = document.querySelector('.video-description');

    iframes.forEach((iframe, index) => {
      let videoIndex = (currentIndex + index) % videoIDs.length;
      iframe.src = `https://www.youtube.com/embed/${videoIDs[videoIndex]}`;
    });

    videoDescriptionElement.innerText = videoTitles[currentIndex];

    localStorage.setItem('videoIndex', (currentIndex + 1) % videoIDs.length);
});