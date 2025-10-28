const express = require('express');
const app = express(); // u varijablu app pohranjujemo objekt koji predstavlja Express
//aplikaciju
const PORT = 3005; // port na kojem će poslužitelj slušati zahtjeve


let korisnici = [
  { id: 1, ime: 'Ivan', prezime: 'Ivić' },
  { id: 2, ime: 'Ana', prezime: 'Anić' },
  { id: 3, ime: 'Marko', prezime: 'Markić' }
];
const path = require('path');

app.get('/', (req, res) => {
res.send('Hello, world!');
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/korisnici', (req, res) => {   
  
  res.json(korisnici);
});

app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});