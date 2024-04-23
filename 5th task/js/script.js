let present = 0;

let divs = document.querySelectorAll('.petal');

divs.forEach(div => {
    div.addEventListener('click', () => {
        div.style = "background: none;";
        if(true){
            present ++;
        }
        else{
        }
    });

    div.style.transition = 'opacity 1s ease-in-out';
});

if (present == 1){
    document.getElementById('win')
    .style.display = "block";
}
else if (present == 2){
    document.getElementById('lose')
    .style.display = "block";
    
}
else{
    document.getElementById('lose')
    .style.display = "none";
    document.getElementById('win')
    .style.display = "none";
}







// function removePetal(){
//     document.getElementById('petal_1')
//     .style.display = "none";
// }
// function removePetal(){
//     document.getElementById('petal_2')
//     .style.display = "none";
// }
// function removePetal(){
//     document.getElementById('petal_3')
//     .style.display = "none";
// }
// function removePetal(){
//     document.getElementById('petal_4')
//     .style.display = "none";
// }
// function removePetal(){
//     document.getElementById('petal_5')
//     .style.display = "none";
// }
// function removePetal(){
//     document.getElementById('petal_6')
//     .style.display = "none";
// }
