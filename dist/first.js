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
const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke'); // ! es que no va a ser null
get_joke.addEventListener('click', tellAJoke);
let joke;
function tellAJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        //llamada a la API
        const jokeResult = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        joke = yield jokeResult.json();
        console.log(joke);
        jokeEl.innerHTML = joke.joke;
    });
}
function scoreJoke(joke, resultado) {
    const jokeReport = {
        joke,
        resultado,
        date: new Date().toISOString()
    };
    jokesReports.push(jokeReport);
}
const jokesReports = [];
//# sourceMappingURL=first.js.map