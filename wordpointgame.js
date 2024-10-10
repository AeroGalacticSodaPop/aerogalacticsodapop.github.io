const MAX_HISTORY_SIZE = 10;
let input_history = new Array(MAX_HISTORY_SIZE).fill("");
let history_size = 0;
let total = 0;
let attempts = 10;

function convert_and_display() {
    let input_text = document.getElementById("input").value;
    // Check if the new input is in the history
    for (let i = 0; i < history_size; i++) {
        if (input_history[i] === input_text) {
            alert("You cannot use the same input consecutively.");
            return null;
        }
    }

    if(attempts<=0){
        alert("Exhausted number of attempts, please refresh the page.");
        return null;
    }

    // Add the new input to the history
    input_history[history_size] = input_text.slice(0, 50);
    history_size += 1;

    // Convert each character to its ASCII code and sum them up
    let total_ascii = 0;
    for (let i = 0; i < input_text.length; i++) {
        total_ascii += input_text.charCodeAt(i);
    }

    let result = (total_ascii % 20) + 1;

    total += result

    attempts--;

    document.getElementById("points").innerHTML= "Points: " + result;
    document.getElementById("total").innerHTML= "Total: " + total;
    document.getElementById("attempts").innerHTML= "Attempts remaining: " + attempts;
    document.getElementById("input").value = ""; // Reset the input value
}

// Event listener for Enter key press
document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Check if the key pressed is Enter
        event.preventDefault(); // Prevent the default form submission
        convert_and_display();  // Call the function to process the input
    }
});
