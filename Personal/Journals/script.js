function saveEntry() {
    const textArea = document.getElementById("journal-text"); // Corrected ID
    if (!textArea) {
        console.error("Textarea not found!");
        return;
    }

    const entryText = textArea.value; // Get the text from the textarea
    console.log("Entry Text:", entryText); // Log the text for debugging

    if (entryText.trim() === "") {
        alert("Please write something before saving!"); // Feedback for empty text
        return;
    }

    const entry = {
        text: entryText, 
        timestamp: new Date().toLocaleString() // Human-readable timestamp
    };

    let entries = JSON.parse(localStorage.getItem("journalEntries")) || []; // Retrieve existing entries
    entries.push(entry); // Add the new entry to the list
    localStorage.setItem("journalEntries", JSON.stringify(entries)); // Save back to LocalStorage

    textArea.value = ""; // Clear the textarea
    alert("Entry saved!"); // Confirm success
}

function showEntries() {
    const entriesSection = document.getElementById("journal-entries"); // Corrected ID
    const entriesList = document.getElementById("entries-list"); // Corrected ID
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || []; // Retrieve saved entries

    entriesList.innerHTML = ""; // Clear existing content

    if (entries.length === 0) {
        entriesList.innerText = "No entries found."; // Feedback for no entries
    } else {
        entries.slice().reverse().forEach((entry) => { // Display each entry
            const entryDiv = document.createElement("div");
            entryDiv.className = "entry";

            const entryText = document.createElement("p");
            entryText.innerText = entry.text; // Corrected property reference

            const entryTime = document.createElement("span");
            entryTime.className = "entry-time";
            entryTime.innerText = `Saved on: ${entry.timestamp}`; // Display timestamp

            entryDiv.appendChild(entryText); // Append the text
            entryDiv.appendChild(entryTime); // Append the timestamp
            entriesList.appendChild(entryDiv); // Add the div to the list
        });
    }

    entriesSection.style.display = "block"; // En
}