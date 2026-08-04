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
