
new_list = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    return new_list[Math.floor(Math.random() * 3)]
}

function convert_selection_string() {
    let selection = prompt("Enter your selection");
    new_selection = selection.toLowerCase(); 
    first_letter = selection[0].toUpperCase();
    string = first_letter + new_selection.slice(1);
    return string;
}

function winner(computer_score, person_score) {
    if (computer_score > person_score) {
        console.log("Computer Wins!");
    } else if (computer_score === person_score) {
        console.log("Tie!");
    } else {
        console.log("You Win!");
    }
}

function game() {
    computer_score = 0;
    person_score = 0; 
    tie = 0;
    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice(); 
        person = convert_selection_string(); 
        isinArray = new_list.includes(person)  
        if (isinArray === false) {
            alert(`Invalid ${person}`);
        } else {
            if (person === 'Rock' && computer === 'Scissors') {
                console.log(`You Win! ${person} beats ${computer}`);
                person_score++;
            } else if (person === 'Scissors' && computer === 'Paper') {
                console.log(`You Win! ${person} beats ${computer}`);
                person_score++;
            } else if (person === 'Paper' && computer === 'Rock') {
                console.log(`You Win! ${person} beats ${computer}`);
                person_score++;
            } else if (person === computer) {
                console.log('Tie');
                tie++;
            } else {
                console.log(`You Lose! ${computer} beats ${person}`);
                computer_score++;
            }
        }
    }
    winner(computer_score, person_score);
}

game();






