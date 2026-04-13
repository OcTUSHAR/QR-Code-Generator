// Initialize the QR Code object once
let qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function generateQR() {
    const input = document.getElementById("qr-input");
    
    if (input.value.trim() === "") {
        alert("Please enter some text or a URL!");
        input.focus();
        return;
    }

    // Generate the code based on input value
    qrcode.makeCode(input.value);
}