let listening = +prompt("Enter your LISTENING score: ")
document.write("Listening: " + listening + "      ")

let reading = +prompt("Enter your READING score: ")
document.write("Reading: " + reading + "      ");

let writing = +prompt("Enter your WRITING score: ")
document.write("Writing: " + writing + "      ");

let speaking = +prompt("Enter your SPEAKING score: ")
document.write("Speaking: " + speaking + "<br>");
document.write("<br>")
document.write("<br>")

let overall = (listening + reading + writing + speaking) / 4;
console.log(overall);
document.write("<strong> Overall: </strong> " + overall);
