/*
======================================
TSLA Client Manager
Version : 0.1
File    : js/app.js
======================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initializeCards();

});

function initializeCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
                "opacity .35s ease, transform .35s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

        card.addEventListener("click", (event) => {

            event.preventDefault();

            const title =
                card.querySelector("h2").textContent;

            console.log("Opening:", title);

            // Future router
            // navigate(title);

        });

    });

}
