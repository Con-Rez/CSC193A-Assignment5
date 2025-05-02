function makeTextBigger() {
    // Display Hellow World alert
    alert("Hello, world!");

    // Change the font size of the text area
    let textArea = document.querySelector("fieldset textarea");
    textArea.style.fontSize = "24pt";
}

function applyStyle() {
    // Get the text area and fancy checkbox elements
    const textArea = document.getElementById("textArea");
    const fancy = document.getElementById("fancy");

    // Apply styles based on the radio options state
    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    // Get the text area and convert text to uppercase
    const textArea = document.getElementById("textArea");
    
    // Convert text to uppercase
    let text = textArea.value.toUpperCase();

    // Split the text into sentences using "." as the delimiter
    let sentences = text.split(".");

    // Remove leading and trailing spaces from each sentence 
    // and add "-Moo" to non-empty sentences
    sentences = sentences.map(sentence => {
        if (sentence.trim() !== "") {
            return sentence.trim() + "-Moo";
        }
        return sentence;
    });

    // Join the sentences back together and set the text 
    // area value
    textArea.value = sentences.join(". ");
}

