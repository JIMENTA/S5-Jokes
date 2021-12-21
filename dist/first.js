"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
showWeather();
const jokeElement = document.getElementById('joke');
const otherJoke = document.getElementById('otherJoke'); // ! es que no va a ser null
otherJoke.addEventListener('click', tellAJoke);
const notGood = document.getElementById('1');
notGood.addEventListener('click', () => scoreJoke(joke, 1));
const regular = document.getElementById('2');
regular.addEventListener('click', () => scoreJoke(joke, 2));
const goodJoke = document.getElementById('3');
goodJoke.addEventListener('click', () => scoreJoke(joke, 3));
let joke;
function tellAJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeResult = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        joke = yield jokeResult.json();
        jokeElement.innerHTML = joke.joke; // es el string denro de la interface
    });
}
function scoreJoke(joke, resultado) {
    const jokeReport = {
        joke,
        resultado,
        date: new Date().toISOString()
    };
    jokesReports.push(jokeReport);
    console.log(jokesReports);
}
const jokesReports = [];
//NIVEL 2
const weatherElement = document.getElementById('weather');
function getImgSrc(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
function getTemp(temp) {
    console.log(temp);
    return temp;
}
function showWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherResult = yield fetch('https://api.openweathermap.org/data/2.5/weather?id=1726705&appid=2ee86dc5e225404ed626762debc246f5');
        let weather = yield weatherResult.json();
        weatherElement.appendChild(document.createElement('img')).src = getImgSrc(weather.weather[0].icon);
        // weatherElement.appendChild(document.createElement<'div'>)= getTemp(temp)
    });
}
function tellAOtherJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('ERROR'));
    });
}
fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "a038a5c47cmshe079b7f5130b22dp19582ejsn41a02b64b357"
    }
})
    .then(response => {
    console.log(response);
})
    .catch(err => {
    console.error(err);
});
tellAOtherJoke();
//# sourceMappingURL=first.js.map