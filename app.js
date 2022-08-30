
const body = document.querySelector('body')
const button_1 = document.createElement('button'); 
button_1.setAttribute('id', 'Rock'); 
button_1.textContent = 'Rock';
body.appendChild(button_1);

const button_2 = document.createElement('button'); 
button_2.setAttribute('id', 'Paper'); 
button_2.textContent = 'Paper';
body.appendChild(button_2);
const button_3 = document.createElement('button'); 
button_3.setAttribute('id', 'Scissors'); 
button_3.textContent = 'Scissors';
body.appendChild(button_3);



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

function game(person, scores) {
    computer = getComputerChoice();  
    isinArray = new_list.includes(person)  
    if (isinArray === false) {
        alert(`Invalid ${person}`);
    } else {
        const div = document.createElement('div');
        if (person === 'Rock' && computer === 'Scissors') { 
            div.textContent = `You Win! ${person} beats ${computer}`;
            body.appendChild(div);
            scores[1]++;
        } else if (person === 'Scissors' && computer === 'Paper') {
            div.textContent = `You Win! ${person} beats ${computer}`;
            body.appendChild(div);
            scores[1]++;
        } else if (person === 'Paper' && computer === 'Rock') {
            div.textContent = `You Win! ${person} beats ${computer}`;
            body.appendChild(div);
            scores[1]++;
        } else if (person === computer) {
            div.textContent = `Tie`;
            body.appendChild(div);
            scores[2]++;
        } else {
            div.textContent = `You Lose! ${computer} beats ${person}`;
            body.appendChild(div);
            scores[3]++;
        }
        scores[0]++;
    }
    return scores;
}


const scores = [0, 0, 0, 0];
function log_text (element, scores) {
    scores = game(element, scores)
    const div = document.createElement('div');
    console.log(scores)
    if (scores[3] === 5) {
        div.textContent = 'Computer Wins!';
        body.appendChild(div);
    } else if (scores[1] === 5) {
        div.textContent = 'You Win!';
        body.appendChild(div);
    }
}




const btn_1 = document.querySelector('#Rock');
btn_1.addEventListener('click', () => log_text('Rock', scores));

const btn_2 = document.querySelector('#Paper');
btn_2.addEventListener('click', () => log_text('Paper', scores));

const btn_3 = document.querySelector('#Scissors');
btn_3.addEventListener('click', () => log_text('Scissors', scores));






