
const jokeElement : HTMLElement = document.getElementById('joke')!;

const otherJoke : HTMLElement = document.getElementById('otherJoke')! // ! es que no va a ser null
otherJoke.addEventListener('click',tellAJoke)

const notGood : HTMLElement = document.getElementById('1')!;
notGood.addEventListener('click',() => scoreJoke(joke, 1))

const regular : HTMLElement = document.getElementById('2')!;
notGood.addEventListener('click',() => scoreJoke(joke, 2))

const goodJoke : HTMLElement = document.getElementById('3')!;
notGood.addEventListener('click',() => scoreJoke(joke, 3))


let joke : Joke 

interface Joke{
    id : string;
    joke : string;
}

async function tellAJoke(){
    const jokeResult = await fetch('https://icanhazdadjoke.com/',{ //llamada a la API
        headers:{
            'Accept': 'application/json'
        }
    })

    joke = await jokeResult.json();
    console.log(joke);
    jokeElement.innerHTML = joke.joke // es el string denro de la interface
  
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
    console.log(jokesReports)
}

const jokesReports: JokesReports[] = [] 



