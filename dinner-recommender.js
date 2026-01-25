document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommend-btn');
  const recommendationDiv = document.getElementById('dinner-recommendation');
  const optionsList = document.getElementById('dinner-options-list');

  const dinnerMenus = [
    "치킨", "피자", "삼겹살", "김치찌개", "된장찌개",
    "초밥", "파스타", "떡볶이", "부대찌개", "족발",
    "보쌈", "짜장면", "짬뽕", "라멘", "돈까스",
    "곱창", "닭갈비", "햄버거", "샌드위치", "카레"
  ];

  // Populate the list of options on the page
  if (optionsList) {
    dinnerMenus.forEach(menu => {
      const listItem = document.createElement('li');
      listItem.textContent = menu;
      optionsList.appendChild(listItem);
    });
  }

  function recommendMenu() {
    // Animate out
    recommendationDiv.classList.add('animate-out');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
      const selectedMenu = dinnerMenus[randomIndex];
      recommendationDiv.innerHTML = `<p class="menu-item">${selectedMenu}!</p>`;
      // Animate in
      recommendationDiv.classList.remove('animate-out');
      recommendationDiv.classList.add('animate-in');
    }, 500); // Corresponds to animation duration

    // Clean up animation classes after they finish
    setTimeout(() => {
        recommendationDiv.classList.remove('animate-in');
    }, 1000);
  }

  if (recommendBtn) {
    recommendBtn.addEventListener('click', recommendMenu);
  }
});
