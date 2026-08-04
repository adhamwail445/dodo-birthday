function unlock() {

    let password = document.getElementById("password").value;

    if (password === "682005") {

        let sound = document.getElementById("unlockSound");
        sound.play();

        document.getElementById("lockScreen").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("lockScreen").style.display = "none";

            document.getElementById("journey").style.display = "flex";

        }, 1000);


    } else {

        alert("Wrong secret code 💔");

    }

}
