function myFunction() {
    const element = document.getElementById("demo");
    if (document.getElementById("zipInput").validity.tooLong) {
        const para = document.createElement("p");
        const node = document.createTextNode("Too many digits. Need to input 5.");
        para.appendChild(node);
        element.appendChild(para);
    }
    else if (document.getElementById("zipInput").validity.tooShort) {
        const para = document.createElement("p");
        const node = document.createTextNode("Not enough digits. Need to input 5.");
        para.appendChild(node);
        element.appendChild(para);
    }
    if (document.getElementById("emailInput").validity.typeMismatch) {
        const para = document.createElement("p");
        const node = document.createTextNode("Enter a valid email address.");
        para.appendChild(node);
        element.appendChild(para);
    }

    if (document.getElementById("passwordInput").validity.patternMismatch) {
        const para = document.createElement("p");
        const node = document.createTextNode("Enter a valid password between 6 to 20 characters which contains at least one numeric digit, one uppercase and one lowercase");
        para.appendChild(node);
        element.appendChild(para);
    }
}

function checkEmail() {
    let text = "Value OK";
    if (document.getElementById("emailInput").validity.typeMismatch) {
        text = "please enter a valid email address"
    }
    document.getElementById("demo").innerHTML = text;
}
