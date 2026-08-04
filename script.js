window.onload = function () {

    setTimeout(() => {

        document.getElementById("welcome").classList.add("hidden");

        document.getElementById("lock").classList.remove("hidden");

    }, 5000);

};



function unlock() {

    let password = document.getElementById("password").value;


    if(password === "682005") {


        document.getElementById("lock").classList.add("hidden");


        document.getElementById("gate").classList.remove("hidden");


    } else {


        alert("Wrong secret ❌");


    }

}




function startJourney(){


    document.getElementById("gate").classList.add("hidden");


    document.getElementById("memories").classList.remove("hidden");


}
const passwordInput = document.getElementById("password");


passwordInput.addEventListener("input", function(e) {

    if(e.target.value.length > 0){

        createHeart();

    }

});



function createHeart(){

    const heart = document.createElement("div");

    heart.className = "password-heart";

    heart.innerHTML = "❤️";


    heart.style.left =
    (window.innerWidth / 2 + Math.random()*80 - 40) + "px";


    heart.style.top =
    (window.innerHeight / 2 + 80) + "px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },1500);

}
