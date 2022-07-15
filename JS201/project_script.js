
const randomNum = Math.ceil(Math.random() * 83);

fetch(`https://swapi.dev/api/people/${randomNum}/`)
    .then(response => response.json())
    .then(character => {
        console.log(character)
    })