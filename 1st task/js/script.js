const dollar = +11000;
const euro = +12354;

let inSum = {
    ticket: +(500 * dollar),
    hotel: +(250 * dollar),
    park: +(120 * euro),
    
}

let total = +(inSum.ticket + inSum.hotel + inSum.park);


console.log(total);


let budget = +prompt("How much is your saving?");

if (budget < total){
    console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
    document.write("<p style='color:red;'>Oooh no sorry,</p> " + "</br>");
    document.write("<p style='color:red; font-weight:600;'>Save up some more money!</p>" + "</br>");
    document.write("<p style='color:red; font-weight:600;'>:(</p>" + "</br>");

    var rejectedElement = document.getElementById("rejected");
    rejectedElement.style.display = "block"; 
}
else {
    console.log("Oq yo’l, Alisher!");
    document.write("Enjoy your trip!" + "</br>");
    document.write("</br>");
    document.write("<p style='font-weight:600;'>Broaden your Horizon with us</p>")
    
    var approvedElement = document.getElementById("approved");
    approvedElement.style.display = "block"; 
        
    

}

