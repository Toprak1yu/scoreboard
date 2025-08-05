// Get home team score element
let home_score = document.getElementById("home-score");
// Get guest team score element
let guest_score = document.getElementById("guest-score");

// Add 1 point to home team
function add1_home() {
    home_score.textContent = Number(home_score.textContent) + 1;
}

// Add 2 points to home team
function add2_home() {
    home_score.textContent = Number(home_score.textContent) + 2;
}

// Add 3 points to home team
function add3_home() {
    home_score.textContent = Number(home_score.textContent) + 3;
}

// Add 1 point to guest team
function add1_guest() {
    guest_score.textContent = Number(guest_score.textContent) + 1;
}

// Add 2 points to guest team
function add2_guest() {
    guest_score.textContent = Number(guest_score.textContent) + 2;
}

// Add 3 points to guest team
function add3_guest() {
    guest_score.textContent = Number(guest_score.textContent) + 3;
}
