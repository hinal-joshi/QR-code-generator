let input = document.querySelector('input');
let generate = document.getElementById('generate');
let qrcode = new QRCode(document.getElementById('qrcode'),{

    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

generate.addEventListener('click',()=>{
    let inputValue = input.value;
    qrcode.makeCode(inputValue);
})