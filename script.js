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
/* ===== Background Effects ===== */

const background = document.getElementById("background-effects");

const icons = [
    { emoji: "❤️", className: "heart" },
    { emoji: "🌹", className: "rose" },
    { emoji: "🎁", className: "gift" },
    { emoji: "🎈", className: "balloon" },
    { emoji: "✨", className: "sparkle" }
];

function createEffect() {

    const item = document.createElement("span");

    const random =
        icons[Math.floor(Math.random() * icons.length)];

    item.className = "effect " + random.className;
    item.textContent = random.emoji;

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (16 + Math.random() * 22) + "px";
    item.style.animationDuration = (8 + Math.random() * 8) + "s";

    background.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 16000);

}

setInterval(createEffect, 700);
