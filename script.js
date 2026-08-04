// Welcome screen

window.onload = function () {

    setTimeout(() => {

        document.getElementById("welcome").classList.add("hidden");

        document.getElementById("lock").classList.remove("hidden");

    }, 5000);

};




// Password unlock

function unlock() {

    let password = document.getElementById("password").value;


    if (password === "682005") {


        document.getElementById("lock").classList.add("hidden");


        document.getElementById("gate").classList.remove("hidden");


    } else {


        alert("Wrong secret ❌");


    }

}




// Enter journey

function startJourney(){


    document.getElementById("gate").classList.add("hidden");


    document.getElementById("memories").classList.remove("hidden");


}






// Background romantic decorations

function createDecoration(){


    const items = [

        "❤️",

        "🌹",

        "🎁",

        "🎈",

        "✨"

    ];



    const item = document.createElement("div");


    item.className = "decoration";


    item.innerHTML =
    items[Math.floor(Math.random() * items.length)];



    item.style.left =
    Math.random() * 100 + "vw";



    item.style.fontSize =
    (15 + Math.random() * 25) + "px";



    item.style.animationDuration =
    (8 + Math.random() * 8) + "s";



    document.body.appendChild(item);



    setTimeout(()=>{

        item.remove();

    },16000);


}




setInterval(()=>{


    createDecoration();


},900);






// Hearts when typing password

document.addEventListener("DOMContentLoaded", function(){


    const passwordInput =
    document.getElementById("password");



    if(passwordInput){


        passwordInput.addEventListener("input", function(){


            createPasswordHeart();


        });


    }


});





function createPasswordHeart(){


    const heart =
    document.createElement("div");



    heart.className =
    "password-heart";



    heart.innerHTML =
    "❤️";



    heart.style.left =
    (window.innerWidth / 2 +
    Math.random()*80 - 40) + "px";



    heart.style.top =
    (window.innerHeight / 2 + 80) + "px";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },1500);


}
