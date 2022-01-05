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
let imagenes = ['./img/blob (2).svg', './img/blob (1).svg', './img/blob (3).svg', './img/blob (4).svg', './img/blob.svg',];
function changesImg() {
    let currentImg = Math.floor(Math.random() * imagenes.length);
    document.body.style.background = `url('${imagenes[currentImg]}')`;
}
showWeather();
const jokeElement = document.getElementById('joke');
const otherJoke = document.getElementById('otherJoke'); // ! es que no va a ser null
otherJoke.addEventListener('click', randomJoke);
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
function getIconWeather(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
function showWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherResult = yield fetch('https://api.openweathermap.org/data/2.5/weather?id=1726705&appid=2ee86dc5e225404ed626762debc246f5&units=metric');
        let weather = yield weatherResult.json();
        weatherElement.appendChild(document.createElement('img')).src = getIconWeather(weather.weather[0].icon);
        document.querySelector('#temp').innerHTML = parseInt(weather.main.temp.toString()) + ' º';
    });
}
function tellAOtherJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const otherResult = yield fetch('https://api.chucknorris.io/jokes/random');
        const jsonResult = yield otherResult.json();
        jokeElement.innerHTML = jsonResult.value;
    });
}
let jokesFunctions = [tellAJoke, tellAOtherJoke];
function randomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const index = Math.floor(Math.random() * jokesFunctions.length);
        const jokeFunction = jokesFunctions[index];
        yield jokeFunction();
        changesImg();
    });
}
//# sourceMappingURL=first.js.map