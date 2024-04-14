document.addEventListener('DOMContentLoaded', function() {
  const videoIDs = ["3-bZDcnJci8", "CdKQj0_ZbNU", "0fmWFIOy2Q8"];
  const videoTitles = [
    "[밥묵자] 800만 수강생 정승제 vs 100만 구독자 유튜바 꼰대희",
    "일어나서 수학 문제 풀고 빨래 돌리고 또 문제 풀고 강의 준비하면서 문제 푸는 수학 일타강사 정승제🔢✏",
    "문제에 빡쳐서 분필 내던지는 정승제"
  ]; // 비디오 제목들

  let currentIndex = parseInt(localStorage.getItem('videoIndex')) || 0; // 현재 비디오 인덱스를 로컬 저장소에서 가져오거나 처음이면 0으로 설정

  const iframes = document.querySelectorAll('.video-wrapper iframe');
  const videoDescriptionElement = document.querySelector('.video-description'); // 비디오 설명을 표시할 요소

  iframes.forEach((iframe, index) => {
    let videoIndex = (currentIndex + index) % videoIDs.length; // 순환 구조를 만들어 비디오 인덱스 계산
    iframe.src = `https://www.youtube.com/embed/${videoIDs[videoIndex]}`;
  });

  // 영상 제목을 웹페이지에 표시
  videoDescriptionElement.innerText = videoTitles[currentIndex]; // 선택한 요소에 영상 제목 표시

  // 다음 방문을 위해 비디오 인덱스 업데이트
  localStorage.setItem('videoIndex', (currentIndex + 1) % videoIDs.length);

  // 계산기 기능
  function calculate() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Number(num1) + Number(num2);
    document.getElementById('calcResult').innerText = '결과: ' + result;
  }

  // 계산기 버튼에 이벤트 리스너 추가
  document.querySelector('button').addEventListener('click', calculate);
});
