const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const genderInput = document.getElementById("gender");

document.addEventListener("DOMContentLoaded", function() {
    const userName = prompt("Please enter your name:");

    if (userName) {
        //membuat variabel welcomeMessage utk menyimpan data dari id #welcomeMessage
        const welcomeMessage = document.getElementById("welcomeMessage");
        //
        welcomeMessage.textContent = `Hello ${userName}, would you like to join us?`;
    }
});



function validateForm(event) {
    event.preventDefault(); 

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const gender = genderInput.value;

    //Conditional if untuk mengecek jika user tidak menginput data pada 1 atau semua form
    //dan akan mengirimkan alert
    if (name === "" || email === "" || gender ==="" || message === "") {
        alert("Please fill in all fields.");
    } else {
    //jika user berhasil menginput pada semua form maka hasil dari inputnya akan disimpan
    //di variabel baru bernama resultDiv dan diresult div akan ditampilkan hasil inputnya
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Name: ${name}</p>
                               <p>Email: ${email}</p>
                               <p>Gender: ${gender}</p>
                               <p>Message: ${message}</p>`;
    }
}
