document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommend-btn');
  const recommendationDiv = document.getElementById('menu-recommendation');

  const dinnerMenus = [
    "치킨",
    "피자",
    "삼겹살",
    "김치찌개",
    "된장찌개",
    "초밥",
    "파스타",
    "떡볶이",
    "부대찌개",
    "족발",
    "보쌈",
    "짜장면",
    "짬뽕",
    "라멘",
    "돈까스"
  ];

  function recommendMenu() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    recommendationDiv.innerHTML = `<p class="menu-item">${selectedMenu}</p>`;
  }

  recommendBtn.addEventListener('click', recommendMenu);
});
