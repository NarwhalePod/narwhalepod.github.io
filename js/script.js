const taglines = [
    "where designers code",
    "where developers design",
    "unicorns exist",
    "digital mastery lives here",
    "the pod for creatives"
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

function updateTagline() {
    dynamicText.textContent = taglines[index];
    index = (index + 1) % taglines.length;
}

setInterval(updateTagline, 3000); // Update every 3 seconds
updateTagline(); // Initial load
