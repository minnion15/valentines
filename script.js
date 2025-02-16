document.addEventListener("DOMContentLoaded", function () {
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    let questionText = document.getElementById("question");
    let music = document.getElementById("bg-music");

    // Fixes Audio Not Playing Issue
    document.body.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        }
    });

    let yesSize = 18;
    let messages = ["baby naman :(", "pwease baby say yes na po", "hmph always no naman eh"];
    let msgIndex = 0;

    yesButton.addEventListener("click", function () {
        window.location.href = "yes_page.html";
    });

    noButton.addEventListener("click", function () {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        questionText.innerHTML = messages[msgIndex];
        msgIndex = (msgIndex + 1) % messages.length;

        yesSize += 5;
        yesButton.style.fontSize = `${yesSize}px`;
    });
});
