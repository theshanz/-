const Invisible_char = "ㅤ";
const inputTextArea = document.getElementById("input");
const outputTextArea = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", () => {
  const inputText = inputTextArea.value.trim();

  if (inputText.includes("🙂")) {
    // Convert binary to text
    const binaryStr = inputText
      .replace(/\s/g, "")
      .replace(/🙂/g, "1")
      .replace(new RegExp(Invisible_char, "g"), "0");
    let outputText = "";

    for (let i = 0; i < binaryStr.length; i += 8) {
      const binaryChar = binaryStr.slice(i, i + 8);
      const asciiChar = parseInt(binaryChar, 2);
      outputText += String.fromCharCode(asciiChar);
    }

    outputTextArea.value = outputText;
  } else {
    // Convert text to binary
    if (inputText === "") {
      outputTextArea.value = "REDDEEEEE";
    } else {
      let binaryStr = "";

      for (let i = 0; i < inputText.length; i++) {
        const asciiVal = inputText.charCodeAt(i);
        const binaryVal = asciiVal.toString(2).padStart(8, "0");
        binaryStr += binaryVal
          .replace(/0/g, Invisible_char)
          .replace(/1/g, "🙂");
      }

      outputTextArea.value = binaryStr;
    }
  }
});
