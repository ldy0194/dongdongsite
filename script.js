document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "공부는 불을 밝히는 것이다. 재능이 아니라 열정이다. — 알버트 아인슈타인",
    "지식은 힘이다. — 프랜시스 베이컨",
    "한 번의 실패와 영원한 실패를 혼동하지 마라. — F. 스콧 피츠제럴드",
    "지식은 공유할수록 커진다. — 알렉산더 폰 훔볼트",
    "행동의 가치는 그 행동을 끝까지 이어가는 데 있다. — 카를로스 캐스타네다"
  ];
  const videoIDs = ["gCdNHUYP1iE", "KNexS61fjus", "ATK7gAaZTOM", "Os_heh8vPfs"];
  const videoTitles = [
    "ILLIT (아일릿) ‘Magnetic’",
    "LE SSERAFIM (르세라핌) ‘Smart‘",
    "(여자)아이들((G)I-DLE) - ‘나는 아픈 건 딱 질색이니까(Fate)‘",
    "aespa 에스파 ‘Spicy‘"
  ];

  let currentIndex = parseInt(localStorage.getItem('currentVideoIndex')) || 0;
  localStorage.setItem('currentVideoIndex', (currentIndex + 1) % videoIDs.length);

  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('studyQuote').innerText = selectedQuote;
  document.getElementById('youtubeVideo').src = `https://www.youtube.com/embed/${videoIDs[currentIndex]}`;
  document.querySelector('.text-gray-700.mb-4').innerText = videoTitles[currentIndex];
  document.body.style.backgroundColor = "#f5f5dc";
});
