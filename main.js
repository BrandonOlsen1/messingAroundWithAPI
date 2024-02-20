// Function to fetch a random joke from the API
function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any")
        .then(response => response.json())
        .then(data => {
            // Check if the joke type is "twopart" or "single"
            if (data.type === "twopart") {
                document.getElementById("jokeContainer").innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
            } else {
                document.getElementById("jokeContainer").innerHTML = `<p>${data.joke}</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
        });
}

// Event listener to fetch a new joke when the button is clicked
document.getElementById("getJokeButton").addEventListener("click", getJoke);

// Fetch a joke when the page loads
getJoke();
