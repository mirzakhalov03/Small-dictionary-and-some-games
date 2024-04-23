let userInput = +prompt("Enter a number from 1 - 7");

if (userInput == 1){
    document.write("The 1st day is <strong>Monday!</strong>");
}
else if (userInput == 2){
    document.write("The 2st day is <strong>Tuesday!</strong>");
}
else if (userInput == 3){
    document.write("The 3rd day is <strong>Wednesday!</strong>");
}
else if (userInput == 4){
    document.write("The 4th day is <strong>Thursday!</strong>");
}
else if (userInput == 5){
    document.write("The 5th day is <strong>Friday!</strong>");
}
else if (userInput == 6){
    document.write("The 6th day is <strong>Saturday!</strong>");
}
else if (userInput == 7){
    document.write("The 7th day is <strong>Sunday!</strong>");
}
else{
    document.write("No matching weekday. Please re-enter...");
}