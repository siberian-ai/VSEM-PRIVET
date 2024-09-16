let balance = 0;
const coin = document.getElementById('coin');
const balanceDisplay = document.getElementById('balance');

coin.addEventListener('click', () => {
    balance += 1;
    balanceDisplay.textContent = balance;
});
