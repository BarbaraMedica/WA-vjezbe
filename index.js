const express = require('express');
const app = express(); // u varijablu app pohranjujemo objekt koji predstavlja Express
//aplikaciju
const PORT = 3005; // port na kojem će poslužitelj slušati zahtjeve

const path = require('path');

let korisnici = [
  { id: 1, ime: 'Ivan', prezime: 'Ivić' },
  { id: 2, ime: 'Ana', prezime: 'Anić' },
  { id: 3, ime: 'Marko', prezime: 'Markić' }
];


//app.get('/', (req, res) => {
//res.send('Hello, world!');
//});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/korisnici', (req, res) => {   
   res.json(korisnici);
});

app.get('/korisnici/:ime', (req, res) => {
  const ime = req.params.ime;
  const korisnik = korisnici.find(k => 
    k.ime.toLowerCase() === ime.toLowerCase()
  );

  if (korisnik) {
    res.json(korisnik);
  } else {
    res.status(404).json({ poruka: 'Korisnik nije pronađen.' });
  }
});



app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});