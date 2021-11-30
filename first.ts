
const jokeEl : HTMLElement = document.getElementById('joke')!;
const get_joke : HTMLElement = document.getElementById('get_joke')! // ! es que no va a ser null

get_joke.addEventListener('click',tellAJoke)
let joke : Joke 

async function tellAJoke(){
    //llamada a la API
    const jokeResult = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    })

    joke = await jokeResult.json();
    console.log(joke);
    jokeEl.innerHTML = joke.joke
}

interface Joke{
    id : string;
    joke : string;
}
interface JokesReports {
    joke : Joke;
    resultado : number;
    date : string;
} 

function scoreJoke(joke : Joke, resultado : number){
    const jokeReport: JokesReports = {
        joke, 
        resultado, 
        date : new Date().toISOString()
    }
    jokesReports.push(jokeReport)
}

const jokesReports: JokesReports[] = [] 