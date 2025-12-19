//Richiamo riferimenti documento output
const listOutput = document.getElementById("list-output");
const buttonRefresh = document.getElementById("btn");

//Chiamo la funzione per stampare 10 mail
emailRandom(10);

//aggiungo evento quando viene cliccato bottone
buttonRefresh.addEventListener("click", () => emailRandom(10));

//Definisco la funzione che mi stamperà n email in lista richiamando l'API
function emailRandom(n) {

  //Dichiaro endpoint con indirizzio API
  const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

  listOutput.innerHTML = "";// Inizializzo l'output nel html come stringa vuota così quandio vado a premere il bottone per ricaricare non mi aggiungerà email alla lista già presente
  for (let i = 0; i < n; i++) {
    //Eseguo chiamata API
    axios.get(endpoint)
      .then((response) => {
        //codice da eseguire in caso di successo
        const result = response.data;
        const email = result.response;

        listOutput.innerHTML += `<li>${email}</li>`;
      })
      .catch((error) => {
        // codice da eseguire in caso di errore
        //console.error(error.message)
        
        listOutput.innerHTML = error.message;
      })
//       .finally(() => {
//         // codice da eserguire a prescindere dall'esito
//         // console.log("Fine della chiamata");
//       });
  }
}
