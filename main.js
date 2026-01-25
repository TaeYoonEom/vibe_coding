document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-lotto-btn');
  const lottoNumbersDiv = document.getElementById('lotto-numbers');

  generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateUniqueRandomNumbers(1, 45, 6);
    lottoNumbersDiv.innerHTML = `<p>${lottoNumbers.join(', ')}</p>`;
  });

  function generateUniqueRandomNumbers(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }
});
