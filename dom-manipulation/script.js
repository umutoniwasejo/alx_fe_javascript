document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteButton = document.getElementById("newQuote");

    // Sample Quotes Array
    let quotes = JSON.parse(localStorage.getItem("quotes")) || [
        { text: "The best way to predict the future is to create it.", category: "Motivation" },
        { text: "Do what you can, with what you have, where you are.", category: "Inspiration" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
    ];

    // Function to Show a Random Quote
    function showRandomQuote() {
        if (quotes.length === 0) {
            quoteDisplay.innerHTML = "<p>No quotes available. Add some!</p>";
            return;
        }
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteDisplay.innerHTML = `<p>"${randomQuote.text}" - <strong>${randomQuote.category}</strong></p>`;
    }

    // Function to Add a New Quote
    function addQuote() {
        const newQuoteText = document.getElementById("newQuoteText").value.trim();
        const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

        if (newQuoteText === "" || newQuoteCategory === "") {
            alert("Please enter both a quote and a category.");
            return;
        }

        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        localStorage.setItem("quotes", JSON.stringify(quotes));

        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";
        showRandomQuote(); // Refresh display
    }

    // Event Listener for the Button
    newQuoteButton.addEventListener("click", showRandomQuote);

    // Initial Display
    showRandomQuote();
});
