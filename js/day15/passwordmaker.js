let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")

const passwordChars = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',

  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',

  '0','1','2','3','4','5','6','7','8','9',

  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+','[',']','{','}','|',
  ';',':',',','.','<','>','?','/'
];

function generatePass() {
    pass1.textContent = ""
    pass2.textContent = ""
    let passlen = Number(document.getElementById("length").value)

    if (passlen < 8 || passlen > 30) {
        alert("Password length must be between 8 and 30.")
        return
    }

    for (let i = 0; i < passlen; i++) {
        let idx = Math.floor(Math.random() * passwordChars.length)
        pass1.textContent += passwordChars[idx] 
    }

    for (let i = 0; i < passlen; i++) {
        let idx = Math.floor(Math.random() * passwordChars.length)
        pass2.textContent += passwordChars[idx] 
    }
}

function copyPassword(id) {
    const password = document.getElementById(id).textContent;

    if (!password) {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password);
    alert("Password copied!");
}