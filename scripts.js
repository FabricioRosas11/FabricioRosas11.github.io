const encryptionMap = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  
  const decryptionMap = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  
  const activeDiv = document.getElementById("activo");
  const emptyDiv = document.getElementById("vacio");
  const textArea = document.getElementById("texto");
  const encryptedTextArea = document.getElementById("textof");
  const encryptButton = document.getElementById("encriptar");
  const decryptButton = document.getElementById("desencriptar");
  const copyButton = document.getElementById("copiar");
  
  function encryptText() {
    if (textArea.value && textArea.value!="") {
      emptyDiv.style.display = "none";
      activeDiv.style.display = "block";
      const text = textArea.value;
      let encryptedText = "";
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char in encryptionMap) {
          encryptedText += encryptionMap[char];
        } else {
          encryptedText += char;
        }
      }
      encryptedTextArea.value = encryptedText;
    }
    else{
        emptyDiv.style.display = "block";
        activeDiv.style.display = "none";
    }
  }
  
  function decryptText() {
    if (textArea.value && textArea.value!="") {
      emptyDiv.style.display = "none";
      activeDiv.style.display = "block";
      const text = textArea.value;
      let decryptedText = "";
      for (let i = 0; i < text.length; i++) {
        let found = false;
        for (let j = 5; j > 0; j--) {
          const substr = text.substr(i, j);
          if (substr in decryptionMap) {
            decryptedText += decryptionMap[substr];
            i += j - 1;
            found = true;
            break;
          }
        }
        if (!found) {
          decryptedText += text[i];
        }
      }
      encryptedTextArea.value = decryptedText;
    }else{
        emptyDiv.style.display = "block";
        activeDiv.style.display = "none";
    }
  }
  
  function copyToClipboard() {
    encryptedTextArea.select();
    document.execCommand("copy");
  }
  
  encryptButton.addEventListener("click", encryptText);
  decryptButton.addEventListener("click", decryptText);
  copyButton.addEventListener("click", copyToClipboard);