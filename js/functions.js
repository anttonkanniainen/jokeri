// 1. Lue käyttöliittymän elementit muuttujiin
const tableBody = document.querySelector('#jokerTable tbody');
const newRowBtn = document.getElementById('newRowBtn');
const rowCountElement = document.getElementById('rowCount');

// Jokeririvien laskuri
let rowCount = 0;

// 3. Funktio, joka lisää uuden jokeririvin taulukkoon
function addJokerRow() {
  // a. Lisää uuden rivin taulukkoon
  const newRow = tableBody.insertRow();

  // b. Toistolause, joka suoritetaan 7 kertaa
  for (let i = 0; i < 7; i++) {
    // c. Luo uuden sarakkeen, jonka tekstiksi satunnaisluku välillä 0-9
    const newCell = newRow.insertCell();
    const randomNumber = Math.floor(Math.random() * 10);
    newCell.textContent = randomNumber;
  }

  // 4. Päivitä arvottujen rivien määrä
  rowCount++;
  rowCountElement.textContent = `Valmiita rivejä ${rowCount}`;
}

// 2. Kuuntelija painikkeen painamistapahtumalle
newRowBtn.addEventListener('click', addJokerRow);