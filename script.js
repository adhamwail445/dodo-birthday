// ========= Screens =========

const welcome = document.getElementById("welcome");
const lock = document.getElementById("lock");
const gate = document.getElementById("gate");
const journey = document.getElementById("journey");

const unlockBtn = document.getElementById("unlockBtn");
const startJourneyBtn = document.getElementById("startJourney");
const passwordInput = document.getElementById("password");


// البداية

window.onload = () => {

    setTimeout(() => {

        welcome.classList.remove("active");
        lock.classList.add("active");

    }, 4500);

};


// فتح القفل

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === "682005") {

        lock.classList.remove("active");
        gate.classList.add("active");

    } else {

        alert("Wrong password ❤️");

    }

});


// بدء الرحلة

startJourneyBtn.addEventListener("click", () => {

    gate.classList.remove("active");
    journey.classList.add("active");

});


// هيكمل بعدين...
