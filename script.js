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
        let text = prompt('Come ti chiami?');

        // Verifica se l'utente ha inserito qualcosa (non è null)
        if (text) {
            // Mostriamo il risultato nel paragrafo con id="user-input"
            document.getElementById('user-input').innerText = `Ciao, ${text}! Benvenuto!`;
        } else {
            // Se l'utente non ha inserito nulla, mostra un messaggio di default
            document.getElementById('user-input').innerText = "Ciao, utente sconosciuto!";
        }