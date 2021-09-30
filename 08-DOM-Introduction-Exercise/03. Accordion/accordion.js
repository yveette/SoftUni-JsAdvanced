function toggle() {
    let button = document.querySelector(".button");
    let textDIV = document.getElementById("extra");

    button.textContent = button.textContent == "More" ? "Less" : "More";
    textDIV.style.display =
        textDIV.style.display == "none" || textDIV.style.display == "" ?
        textDIV.style.display = "block" : textDIV.style.display = "none";

    console.log(button);
}