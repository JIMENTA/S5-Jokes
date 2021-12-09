showWeather()
const jokeElement : HTMLElement = document.getElementById('joke')!;

const otherJoke : HTMLElement = document.getElementById('otherJoke')! // ! es que no va a ser null
otherJoke.addEventListener('click',tellAJoke)

const notGood : HTMLElement = document.getElementById('1')!;
notGood.addEventListener('click',() => scoreJoke(joke, 1))

const regular : HTMLElement = document.getElementById('2')!;
regular.addEventListener('click',() => scoreJoke(joke, 2))

const goodJoke : HTMLElement = document.getElementById('3')!;
goodJoke.addEventListener('click',() => scoreJoke(joke, 3))


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


//NIVEL 2
const weatherElement : HTMLElement = document.getElementById('weather')!;

interface Item {
    description: string;
    icon: string;
    id: number;
    main: string;
}

interface Weather {
    weather: Item[]
}


async function showWeather(){
    const weatherResult = await fetch('https://api.openweathermap.org/data/2.5/weather?id=1726705&appid=2ee86dc5e225404ed626762debc246f5&img/wn/04n')//llamada a la API
 
    let weather: Weather = await weatherResult.json();
    console.log(weather.weather[0].icon);
    weatherElement.innerHTML = weather.weather[0].icon 
}


