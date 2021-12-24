showWeather()
const jokeElement : HTMLElement = document.getElementById('joke')!;

const otherJoke : HTMLElement = document.getElementById('otherJoke')! // ! es que no va a ser null
otherJoke.addEventListener('click',randomJoke)

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
    icon: string;
}

interface Weather {
    weather: Item[]
    main : {temp : number}

}
function getImgSrc (icon :string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}


async function showWeather(){
    const weatherResult = await fetch('https://api.openweathermap.org/data/2.5/weather?id=1726705&appid=2ee86dc5e225404ed626762debc246f5&units=metric')
    let weather: Weather = await weatherResult.json();
    
    weatherElement.appendChild(document.createElement('img')).src = getImgSrc(weather.weather[0].icon);
    document.querySelector('#temp')!.innerHTML = weather.main.temp.toString() + ' º'
}


function tellAOtherJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
   .then (res => res.json())
   .then (data => jokeElement.innerHTML = data.value)
   .catch (error => console.log('ERROR'))
}

let jokesFunctions = [tellAJoke, tellAOtherJoke]

function randomJoke(){
   const index =  Math.floor(Math.random() * jokesFunctions.length)
   const jokeFunction = jokesFunctions[index]
   jokeFunction()
}

