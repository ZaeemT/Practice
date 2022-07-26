$(document).ready(function() {
    //jQuery in here 
    $(".getRandomCharacter").on("click", function() {
        const randomId = Math.ceil(Math.random() * 88);
        console.log( $(randomId) );
    })
})