// script.js

document.addEventListener("DOMContentLoaded", () => {
    const posecard = document.querySelector(".posecard");

    // Add simple animation using JS (fade and scale)
    posecard.style.opacity = 0;
    posecard.style.transform = "scale(0.95)";

    setTimeout(() => {
        posecard.style.transition = "all 1.2s ease-in-out";
        posecard.style.opacity = 1;
        posecard.style.transform = "scale(1)";
    }, 300);

    // Continuous confetti animation
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const confettiCanvas = document.getElementById("confetti-canvas");
    const confettiInstance = confetti.create(confettiCanvas, { resize: true, useWorker: true });

    (function frame() {
        confettiInstance({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#d4af37", "#155724"]
        });
        confettiInstance({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#d4af37", "#155724"]
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        } else {
            setTimeout(() => {
                animationEnd = Date.now() + duration;
                frame();
            }, 2000);
        }
    })();
});
