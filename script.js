// Es - 1
// Dato un array di oggetti rappresentanti degli sviluppatori:

// crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa.


    // let list = [
    //   { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    //   { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    //   { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    //   { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    // ];

    // function countJavaScriptDevelopersFromEurope(list) {
    //     return list.filter(dev => dev.language === 'JavaScript' && dev.continent === 'Europe').length;
    //   }

    //   console.log(countJavaScriptDevelopersFromEurope(list));
      
      



    // Es - 2
    // Dato un array di oggetti:
    
    // crea una funzione che ritorni un array
    // e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
    // “Awe < firstName >, io lavoro con < language here >, ma effettivamente è meglio javascript”


    //   let list = [
    //     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    //     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    //     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
    //   ];
      
    //   function addGreeting(list) {
    //     return list.map(dev => {
    //       dev.greeting = `Awe ${dev.firstName}, io lavoro con ${dev.language}, ma effettivamente è meglio javascript!`;
    //       return dev;
    //     });
    //   }
      
    //   console.log(addGreeting(list));



    //   Es - 3
    //   Dato un array di oggetti:
      
    //   crea una funzione che ritorni
    //   true se c’è almeno una persona che ha gli occhi verdi;
    //   false se nessuno ha gli occhi verdi


        //   let list = [
        //     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
        //     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
        //     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
        //   ];
      

        //   function hasGreenEyes(list) {
        //     return list.some(person => person.eyes === 'Green');
        //   }
          
        //   console.log(hasGreenEyes(list));



        // Es - 4
        //     Dato un Array di oggetti:

        //     crea una funzione che ritorni la seguente stringa:
        //     firstName, country del primo sviluppatore Python che trova
        //     Non ci sono sviluppatori Python nel caso in cui non ci siano.

        // let list = [
        //     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
        //     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
        //     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
        //   ];
          
        //   function findDeveloperByLanguage(list, language) {
        //     const developer = list.find(dev => dev.language.toLowerCase() === language.toLowerCase());
        //     if (developer) {
        //       return `${developer.firstName}, ${developer.country}`;
        //     } else {
        //       return `No developers found using ${language}.`;
        //     }
        //   }
          
        //   // Esempio di utilizzo con un input dinamico
        //   const languageInput = prompt("Enter the programming language you want to search for:");
        //   console.log(findDeveloperByLanguage(list, languageInput));
          


        // Es - 5
        // Dato un array di oggetti:

        // creare una funzione che permetta di mostrare un messaggio di alert:
        // se logged=true: mostrare il messaggio “L’utente è stato registrato.”
        // se logged=false: mostrare il messaggio “L’utente non è registrato.”

        // let list = [
        //     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
        //     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
        //     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }

        // ]


        // function checkUserRegistration(list) {
        //     list.forEach(user => {
        //         // Mostra il messaggio con il nome dell'utente (firstName e lastName)
        //         if (user.logged) {
        //             alert(`L'utente ${user.firstName} ${user.lastName} è stato registrato.`);
        //         } else {
        //             alert(`L'utente ${user.firstName} ${user.lastName} non è registrato.`);
        //         }
        //     });
        // }
            
        //     // Chiamare la funzione per visualizzare gli alert
        //     checkUserRegistration(list);

        // Es - 6
        // Tramite una finestra di pop-up, catturare l’input dell’utente e mostrarlo all’interno di un paragrafo.
        
        // Utilizzare prompt() → metodo che fa visualizzare una finestra di pop-up per far inserire un dato all’utente

        // Mostriamo un prompt per chiedere il nome dell'utente
        // let text = prompt('Come ti chiami?');

        // Verifica se l'utente ha inserito qualcosa (non è null)
        // if (text) {
            // Mostriamo il risultato nel paragrafo con id="user-input"
        //     document.getElementById('user-input').innerText = `Ciao, ${text}! Benvenuto!`;
        // } else {
            // Se l'utente non ha inserito nulla, mostra un messaggio di default
        //     document.getElementById('user-input').innerText = "Ciao, utente sconosciuto!";
        // }


        //Es-7:


        // let openingDays = [
        //     {day: 'monday', from: '9.00', to: '18.00'},
        //     {day: 'tuesday', from: '9.00', to: '18.00'},
        //     {day: 'wednesday', from: '9.00', to: '18.00'},
        //     {day: 'thursday', from: '9.00', to: '18.00'},
        //     {day: 'saturday', from: '9.00', to: '18.00'},
        //     {day: 'sunday', from: '9.00', to: '18.00'},
        //   ];
          
          // Funzione che inserisce la lista dei giorni e orari nella pagina
          // function displayOpeningHours() {
            // Otteniamo il riferimento alla lista non numerata (ul) con id "openings"
            // const ul = document.getElementById('openings');
            
            // Array di giorni della settimana per la visualizzazione
            // const daysOfWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Sabato', 'Domenica'];
            
            // Iteriamo sull'array openingDays per creare gli item della lista
            // openingDays.forEach((opening, index) => {
              // Creiamo un nuovo elemento <li> per ogni giorno e orario
              // const li = document.createElement('li');
              
              // Creiamo il testo da inserire nel <li> (giorno e orari)
              // li.textContent = `${daysOfWeek[index]}: dalle ${opening.from} alle ${opening.to}`;
              
              // Aggiungiamo il <li> creato all'elemento <ul>
              // ul.appendChild(li);
            // });
          // }
          
          // Chiamata della funzione per visualizzare gli orari di apertura
          // displayOpeningHours();
          
      // Es-8:

    //   function toggleColor() {
    //     var title = document.querySelector('h1');  // Seleziona l'elemento h1
    //     title.classList.toggle('color');  // Aggiunge o rimuove la classe 'color'
    // }


    // Es-9:

    let list = [
      { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
      { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
      { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
      { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
      { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
      { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
      { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
      { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
      { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
      { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
  ];

  const container = document.getElementById('cards-container');

  list.forEach(person => {
      const card = document.createElement('div');
      card.classList.add('card');

      // Creazione del contenuto della card
      card.innerHTML = `
          <div class="flag">
              <i class="flag-icon flag-icon-${person.flag}"></i>
          </div>
          <div class="info">
              <h3>${person.firstName}</h3>
              <p>Age: ${person.age}</p>
              <p>Country: ${person.country}</p>
          </div>
          <div class="language">
              <p>Language: ${person.language}</p>
          </div>
      `;
      container.appendChild(card);
  });

  // Es-10:

//   let list = [
//     { id: 1, linkName: 'home', page: 'home.html', icon: 'bi bi-house-door' },
//     { id: 2, linkName: 'chi siamo', page: 'chi-siamo.html', icon: 'bi bi-people' },
//     { id: 3, linkName: 'servizi', page: 'servizi.html', icon: 'bi bi-bicycle' },
//     { id: 4, linkName: 'categorie', page: 'categorie.html', icon: 'bi bi-tag' },
//     { id: 5, linkName: 'blog', page: 'blog.html', icon: 'bi bi-newspaper' },
//     { id: 6, linkName: 'contatti', page: 'contatti.html', icon: 'bi bi-send' }
// ];

// // Funzione per generare la navbar
// function generateNavbar() {
//     const container = document.getElementById('navbar-container');

//     // Iteriamo sull'array 'list' per creare i link dinamicamente
//     list.forEach(link => {
//         // Creiamo un elemento <a> per ogni oggetto nell'array
//         const linkElement = document.createElement('a');
//         linkElement.href = link.page;

//         // Creiamo l'elemento <i> per l'icona
//         const iconElement = document.createElement('i');
//         iconElement.setAttribute('class', link.icon);

//         // Aggiungiamo l'icona e il nome del link
//         linkElement.appendChild(iconElement);
//         linkElement.appendChild(document.createTextNode(link.linkName));

//         // Aggiungiamo il link alla navbar
//         container.appendChild(linkElement);
//     });
// }

// // Chiamata della funzione per generare la navbar
// generateNavbar();

  // Es-11:
  // let navbar = document.querySelector('.navbar');

  // // Aggiungiamo un event listener per lo scroll
  // document.addEventListener('scroll', () => {
  //     // Verifica se la pagina è stata scrollata più di 50px
  //     if (window.scrollY > 50) {
  //         // Aggiungi la classe 'scrolled' alla navbar quando scorre verso il basso
  //         navbar.classList.add('scrolled');
  //     } else {
  //         // Rimuovi la classe 'scrolled' quando si scrolla verso l'alto
  //         navbar.classList.remove('scrolled');
  //     }
  // });

  // Es-12:

//   function calculate() {
//     // Ottieni i valori dagli input
//     let num1 = parseFloat(document.getElementById('num1').value);
//     let num2 = parseFloat(document.getElementById('num2').value);
//     let operation = document.getElementById('operation').value;
    
//     // Verifica che i numeri siano validi
//     if (isNaN(num1) || isNaN(num2) || operation === "") {
//         alert("Per favore, inserisci numeri validi e seleziona un'operazione.");
//         return;
//     }

//     // Calcola il risultato in base all'operazione selezionata
//     let result;
//     switch (operation) {
//         case 'sum':
//             result = num1 + num2;
//             break;
//         case 'subtraction':
//             result = num1 - num2;
//             break;
//         case 'multiplication':
//             result = num1 * num2;
//             break;
//         case 'division':
//             if (num2 === 0) {
//                 alert("Non puoi dividere per zero!");
//                 return;
//             }
//             result = num1 / num2;
//             break;
//         default:
//             alert("Seleziona un'operazione.");
//             return;
//     }

//     // Mostra il risultato e svuota i campi input
//     document.getElementById('total').textContent = `Totale: ${result}`;
//     document.getElementById('num1').value = '';
//     document.getElementById('num2').value = '';
//     document.getElementById('operation').value = '';
// }
