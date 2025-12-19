//Richiamo riferimenti documento output
const listOutput = document.getElementById('list-output');
const buttonRefresh = document.querySelector('button');

//Dichiaro endpoint con indirizzio API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
//Eseguo chiamata API 
    axios.get(endpoint)
        .then(response => {
            //codice da eseguire in caso di successo
            const result = response.data;

            console.log(response, result);
        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error.message)
        })
        .finally(() => {
            // codice da eserguire a prescindere dall'esito
            console.log("Fine della chiamata");
        })
