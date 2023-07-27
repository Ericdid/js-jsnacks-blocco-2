// generiamo una lista di Nomi
const nameList = ["marco", "paolo", "geeno", "mario"];

// generiamo una lista di Cognomi

const surnameList = ["maria mario", "sciamenna", "fernandello", "fuffolo"];

// generiamo lista vuota di invitati

const invites = [];

// chiediamo all utente il numero di invitati

const invNumb = parseInt(prompt("quanta gente invitare?"));

// generiamo invitati

for (let i = 0; i < invNumb; i++) {
  //prendo un nome casuale dalla lista
  const randomInvName = Math.floor(Math.random() * nameList.length);
  //nome recuperato
  const randomname = nameList[randomInvName];
  //prendo un cognome casuale dalla lista
  const randomInvSurname = Math.floor(Math.random() * surnameList.length);
  //cognome recuperato
  const randomSurname = surnameList[randomInvSurname];
  // metto insieme nome casuale e cognome casuale
  const fakeGuest = randomname + " " + randomSurname;
  // pusho nella lista invitati
  invites.push(fakeGuest);
}

console.table(invites);
