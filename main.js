document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-lotto-btn');
  const lottoNumbersDiv = document.getElementById('lotto-numbers');
  const themeSwitch = document.getElementById('checkbox');

  function generateUniqueRandomNumbers(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function displayLottoNumbers() {
    lottoNumbersDiv.innerHTML = ''; // Clear previous numbers
    const lottoNumbers = generateUniqueRandomNumbers(1, 45, 6);
    lottoNumbers.forEach(number => {
      const numberElement = document.createElement('p');
      numberElement.textContent = number;
      lottoNumbersDiv.appendChild(numberElement);
    });
  }

  // Theme switcher
  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Generate numbers on initial load
  displayLottoNumbers();

  // Generate numbers on button click
  generateBtn.addEventListener('click', displayLottoNumbers);
});
