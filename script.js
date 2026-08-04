function unlock() {

    let password = document.getElementById("password").value;

    if (password === "682005") {

        document.getElementById("lockScreen").style.display = "none";

        document.getElementById("journey").style.display = "flex";

    } else {

        alert("Wrong secret code 💔");

    }

}
