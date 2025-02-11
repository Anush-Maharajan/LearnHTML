document.getElementById("thisBtn").onclick = function() {
    let username = prompt("Give me your money");
    console.log(username);
}

document.getElementById("Prpt").onclick = function() {
    let username = prompt("Enter your name: ");
    document.write("Your name is " ,username);
}

document.getElementById("multi").onclick = function() {
    let username = prompt("What is your name?")
    let isChoice = confirm("Are you gay?")

    if(isChoice) {
        document.write("Oil UP", username , ".......... Lap dance hann na tah xakka")
    }

    else {
        document.write(username, ".......Lap dance hann na tah strip gardai")
    }
}