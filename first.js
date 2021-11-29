fetch('https://icanhazdadjoke.com/')
    .then(function (res) { return res.json(); })
    .then(function (data) { return console.log(data); });
