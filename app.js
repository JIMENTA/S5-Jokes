const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke')

get_joke.addEventListener('click',tellAJoke)

tellAJoke()

async function tellAJoke(){
    //llamada a la API
    const jokeResult = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    })

    const joke = await jokeResult.json();
    console.log(joke);
    jokeEl.innerHTML = joke.joke
}
