/* 
    1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    - Codice giocatore
    - Nome
    - Cognome
    - Età
    - Media punti fatti per partita
    - Percentuale di successo per tiri da 3 punti

    2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
    - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
    - la media punti fatti per partita deve essere compresa tra 0 e 50
    - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100

    3. Stampare Nome, cognome, età e codice giocatore.

    4. Creare un array di 10 giocatori di basket, con le regole sopra indicate

    5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
*/
const FirstName = ['Luca','Federico','Giulio','Francesco','Giulia','Simona','Lello','Ugo','Patrizia','Giuseppe']
const LastName = ['Trimarco','Salvat','Esposito','Abet','De Santis','Zinno','Wayne','Grosso','Di Giacomo','De Stasio']

// giocatore singolo
let player = {
    firstName : 'Federico',
    lastName : 'Trimarco',
    id : makeId(3),
    age : 23,
    pointsForMatch : randomNumber(0, 50),
    percenThreePoint : randomNumber(0, 100),
};
console.log(player);

// destrutturazione player
const {firstName, lastName, age, id} = player;
console.log(firstName, lastName, age, id);

// creazione team
const teamPlayers = randomTeam(FirstName, LastName);
console.table(teamPlayers);

// Creazione del nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
const newTeam = teamPlayers.filter ( element => (element.pointsForMatch > 35 && element.percenThreePoint > 30));
console.table(newTeam);





/******************
 F U N Z I O N I
******************/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// generate ID
function makeId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultChar = '';
    let resultNumber = '';
    for ( let i = 0; i < length; i++ ) {
      resultChar += characters.charAt(randomNumber(0, characters.length - 1));
      resultNumber += randomNumber(0, 9);
    }
    return resultChar + resultNumber;
}

// gen random team
function randomTeam(arrayName, arrayLastName){
    const team = [];
    for(let i = 0; i < 10; i++){
        const players = {
            firstName : randomName(arrayName),
            lastName : randomName(arrayLastName),
            id : makeId(3),
            age : randomNumber(18, 50),
            pointsForMatch : randomNumber(0, 50),
            percenThreePoint : randomNumber(0, 100),
        };
        team.push(players);
    }
    return team;
}

// gen random name & last-name
function randomName(array) {
    const randomTeam = array[Math.floor(Math.random() * array.length)];
    return randomTeam;
};

