const userForm = document.getElementById("form");
const userDistanceInput = document.getElementById("km");
const userAgeInput = document.getElementById("age");
const outputMessage = document.getElementById("message");

userForm.addEventListener("submit", handleUserForm);

function handleUserForm(event) {
    event.preventDefault();

    const userDistance = parseInt(userDistanceInput.value);
    console.log(`Km: ${userDistance}`);
    const userAge = parseInt(userAgeInput.value);
    console.log(`Età: ${userAge}`);
    const biglietto = 0.21 * userDistance;

    let sconto;
    let totale;
    let message;
    if (userDistance <= 0 || userAge <= 0 || isNaN(userDistance) === true || isNaN(userAge) === true || userAge > 150) {
        message = "Perfavore, inserisci valori validi";
        outputMessage.classList.add("text-danger");
    } else {
        if (userAge < 18) {
            sconto = 20;
        } else if (userAge >= 65) {
            sconto = 40;
        } else {
            sconto = 0;
        }
        totale = biglietto - (biglietto * sconto / 100);
        message = `
            Prezzo biglietto: 0.21&euro;/Km <br>
            Distanza: ${userDistance}Km <br> 
            Età passeggero: ${userAge} <br> 
            sconto: ${sconto}% <br> <br> 
            Totale: ${totale.toFixed(2)}&euro;
            `;
        outputMessage.classList.remove("text-danger");
        console.log(`0.21€ x ${userDistance} = ${biglietto.toFixed(2)}€`);
        console.log(`${biglietto.toFixed(2)}€ - ${sconto}% = ${totale.toFixed(2)}€`);
    }
    outputMessage.innerHTML = message;
    outputMessage.classList.remove("d-none");
    outputMessage.classList.add("d-block");
}