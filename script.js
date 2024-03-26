let input = document.getElementById("input");
let range = document.getElementById("Range");
let passwordLengthValue = document.querySelector(".Password-length-value");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("Uppercase");
let number = document.getElementById("number");
let specialCharacter = document.getElementById("Special-character");

let generateBtn = document.querySelector(".Generate-btn");
let copyBtn = document.getElementById("copy-btn");


range.addEventListener("input", function () {
    passwordLengthValue.innerHTML = range.value;
  });


let temp ;
let password;


generateBtn.addEventListener("click", () => {
    password = "";
    temp = "" ;
    
    if(lowercase.checked){
        temp = temp + "abcdefghijklmnopqrstuvwxyz"
    }
    if(uppercase.checked){
        temp = temp + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(number.checked){
        temp = temp + "0123456789"
    }
    if(specialCharacter.checked){
        temp = temp + "!@#$%^&*()-=_+/*[]{}\|;':<>,.?/"
    }
    if (temp == ""){
        alert("Choose a Conditon");
        return
    }


    for (let i = 0; i < range.value ; i++) {
        let random = Math.floor(Math.random() * temp.length);
        password = password + temp[random];
    }

    input.value = password;

});

copyBtn.addEventListener("click", () => {
    if (input.value == "") {
        alert("Generate your password first");
    } else {
        navigator.clipboard.writeText(input.value);
        alert("Copied to clipboard");
    }
});