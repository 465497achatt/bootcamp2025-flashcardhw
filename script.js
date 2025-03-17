let flashcards = [ // instead of const
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

let cardDisplay = document.getElementById("flashcard");
let text = document.createElement("p");
text.id = "card-content"; // is there any easier way?
cardDisplay.append(text);

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

let newTerm = document.getElementById("new-term");
let newDef = document.getElementById("new-definition");
let addBtn = document.getElementById("add-card-btn");

// Start with this function to simply display the card
function displayCard() {
    let currCard = flashcards[currentIndex];
    let front = currCard.term;
    let back = currCard.definition;

    text.innerHTML = showingTerm ? front : back;
}

function flipCard() {
    showingTerm = !showingTerm;
    displayCard();
}

function changeCard(change) {
    currentIndex = (currentIndex + change + flashcards.length) % flashcards.length; // had to add length since mod negative value is negative
    showingTerm = true;
    displayCard();
}

function addCard(term, definition) {
    // Check whether they actually added text or not
    if (term === "" || definition === "") { // dont add a card
        console.log("blank");
    } else {
        flashcards.push({term, definition});
        currentIndex = flashcards.length - 1; // when add a card, show the card
        displayCard();
    }

}

// The rest of the code you will write is apart of event listeners
cardDisplay.addEventListener("click", flipCard);

prevBtn.addEventListener("click", ()=>changeCard(-1)); //why can't you just call the function with parameters again?
nextBtn.addEventListener("click", ()=>changeCard(1));

addBtn.addEventListener("click", ()=>addCard(newTerm.value, newDef.value));


// This line will display the card when the page is refreshed
window.onload = displayCard;
