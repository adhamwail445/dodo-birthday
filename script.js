function unlock() {

    let password = document.getElementById("password").value;


    if (password === "682005") {


        let sound = document.getElementById("unlockSound");

        sound.play();


        document.getElementById("lockScreen").style.opacity = "0";


        setTimeout(function(){


            document.getElementById("lockScreen").style.display = "none";


            document.getElementById("journey").style.display = "flex";


            startJourney();


        },1000);



    } else {


        alert("Wrong secret code 💔");


    }

}





function startJourney(){


    setTimeout(function(){


        document.getElementById("journey").style.display="none";


        document.getElementById("memories").style.display="flex";


    },4000);



    setTimeout(function(){


        document.getElementById("memories").style.display="none";


        document.getElementById("final").style.display="flex";


        showFinalMessage();


    },12000);



}





function showFinalMessage(){


    let message =
    "Thank you for every beautiful moment. You are a special memory in my life ❤️";


    let text = document.getElementById("finalText");


    let i = 0;



    let typing = setInterval(function(){


        text.innerHTML += message[i];


        i++;


        if(i >= message.length){

            clearInterval(typing);

        }


    },80);


}
