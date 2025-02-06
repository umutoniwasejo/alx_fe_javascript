document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteButton = document.getElementById("newQuote");

    // Sample Quotes Array (retrieved from localStorage or default)
    let quotes = JSON.parse(localStorage.getItem("quotes")) || [
        { text: "The best way to predict the future is to create it.", category: "Motivation" },
        { text: "Do what you can, with what you have, where you are.", category: "Inspiration" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" },
        { text: "Believe you can and you're halfway there.", category: "Encouragement" },
        { text: "Your time is limited, so don’t waste it living someone else’s life.", category: "Life" }
    ];

    // Function to Select a Random Quote and Update the DOM
    function displayRandomQuote() {
        if (quotes.length === 0) {
            quoteDisplay.innerHTML = "<p>No quotes available. Add some!</p>";
            return;
        }

        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];

        quoteDisplay.innerHTML = `<p>"${randomQuote.text}" - <strong>${randomQuote.category}</strong></p>`;
    }

    // Function to Create the Form for Adding a New Quote
    function createAddQuoteForm() {
        const formContainer = document.createElement("div");

        // Input Fields
        const quoteInput = document.createElement("input");
        quoteInput.id = "newQuoteText";
        quoteInput.type = "text";
        quoteInput.placeholder = "Enter a new quote";

        const categoryInput = document.createElement("input");
        categoryInput.id = "newQuoteCategory";
        categoryInput.type = "text";
        categoryInput.placeholder = "Enter quote category";

        // Add Button
        const addButton = document.createElement("button");
        addButton.textContent = "Add Quote";
        addButton.addEventListener("click", addQuote);

        // Append Elements to Form
        formContainer.appendChild(quoteInput);
        formContainer.appendChild(categoryInput);
        formContainer.appendChild(addButton);

        document.body.appendChild(formContainer);
    }

    // Function to Add a New Quote
    function addQuote() {
        const newQuoteText = document.getElementById("newQuoteText").value.trim();
        const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

        if (newQuoteText === "" || newQuoteCategory === "") {
            alert("Please enter both a quote and a category.");
            return;
        }

        // Add the New Quote
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        localStorage.setItem("quotes", JSON.stringify(quotes));

        // Clear Input Fields
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        displayRandomQuote(); // Refresh display
    }

    // Event Listener for the "Show New Quote" Button
    newQuoteButton.addEventListener("click", displayRandomQuote);

    // Initialize Application
    displayRandomQuote();
    createAddQuoteForm();
});


