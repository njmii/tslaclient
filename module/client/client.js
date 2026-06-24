const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const keyword =
    searchInput.value.toLowerCase();

    document
    .querySelectorAll(".client-card")
    .forEach(card=>{

        const name =
        card.innerText.toLowerCase();

        card.style.display =
        name.includes(keyword)
        ? "flex"
        : "none";

    });

});

document
.getElementById("addClient")
.addEventListener("click",()=>{

    alert(
        "Add Client module coming soon."
    );

});
