// Story structure with stages, choices, consequences, and images
const storyStages = {
    start: {
        text: "You have arrived at a mysterious mansion. The front door creaks as you open it. What will you do?",
        image: "mansion_entrance.jpg",
        choices: [
            { text: "Enter the mansion", consequence: "entranceHall" },
            { text: "Leave the mansion", consequence: "end1" }
        ]
    },
    entranceHall: {
        text: "Inside, the air feels cold. You see a grand staircase, a dark hallway, and an old study. Where do you go?",
        image: "entrance_hall.jpg",
        choices: [
            { text: "Go up the staircase", consequence: "upstairs" },
            { text: "Walk down the dark hallway", consequence: "darkHallway" },
            { text: "Enter the study", consequence: "study" }
        ]
    },
    upstairs: {
        text: "You reach the second floor and hear eerie sounds. There’s a door at the end of the hall. Do you open it?",
        image: "staircase.jpg",
        choices: [
            { text: "Open the door", consequence: "end2" },
            { text: "Turn around and go back", consequence: "entranceHall" }
        ]
    },
    darkHallway: {
        text: "The hallway is dark, but you notice strange symbols on the walls. Do you investigate?",
        image: "dark_hallway.jpg",
        choices: [
            { text: "Look closer at the symbols", consequence: "end3" },
            { text: "Walk quickly past them", consequence: "end4" }
        ]
    },
    study: {
        text: "You enter the study and find a dusty old book. Do you read it?",
        image: "study_room.jpg",
        choices: [
            { text: "Read the book", consequence: "end5" },
            { text: "Leave the study", consequence: "entranceHall" }
        ]
    },
    end1: { text: "You decide to leave the mansion, but a mysterious force pulls you back inside. The mansion is cursed.", image: "mansion_cursed.jpg", choices: [] },
    end2: { text: "As you open the door, a ghost appears! You’ve met your fate in the mansion.", image: "ghost_appearance.jpg", choices: [] },
    end3: { text: "The symbols on the wall are magical, and they draw you into a dark void. You disappear forever.", image: "disappearing.jpg", choices: [] },
    end4: { text: "You run as fast as you can, but the hallway stretches endlessly. You are trapped in the mansion.", image: "endless_hallway.jpg", choices: [] },
    end5: { text: "The book you read opens a portal to another dimension. You step through it, never to return.", image: "portal.jpg", choices: [] }
};

// Game state variables
let currentStage = "start";

// Function to start the game
function startGame() {
    currentStage = "start";
    updatePage();
}

// Function to update the page content
function updatePage() {
    const stage = storyStages[currentStage];
    
    document.getElementById('story-text').textContent = stage.text;
    document.getElementById('story-image').src = stage.image;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = ''; // Clear existing choices
    
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = function() {
            currentStage = choice.consequence;
            updatePage();
        };
        choicesDiv.appendChild(button);
    });
}

// Initialize the game
startGame();
