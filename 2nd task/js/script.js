document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let userInput = document.getElementById('userInput').value.trim(); 

    document.getElementById('noContent').style.display = "none";

    let definitions = document.querySelectorAll('.meaning-content p');
    definitions.forEach(function(definition) {
        definition.style.display = "none";
    });

    let wordDefinition = document.getElementById(userInput);
    if (wordDefinition) {
        wordDefinition.style.display = "block";
    } else {
        document.getElementById('noContent').style.display = "block";
    }

    document.getElementById('userInput').value = "";
});
