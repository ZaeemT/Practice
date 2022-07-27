$(document).ready(function() {
    //jQuery in here 
    $(".getRandomCharacter").on("click", function() {
        name.innerHTML = '<em>Loading...</em>';
        eyecolor.innerHTML = '<em>Loading...</em>';
        picture.innerHTML = '<em>Loading...</em>';
        
        const randomId = Math.ceil(Math.random() * 88);
        $.get(`https://akabab.github.io/starwars-api/api/id/${randomId}.json`, function(data){
            $("div#name").text(data['name']);
            $("div#eyecolor").text(data['eyeColor']);
            $("#picture").attr("src", data['image']);
        })
    })
})