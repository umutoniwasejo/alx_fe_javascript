document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteButton = document.getElementById("newQuote");
    const categoryFilter = document.getElementById("categoryFilter");

    // Load Quotes and Categories from Local Storage or Use Defaults
    let quotes = JSON.parse(localStorage.getItem("quotes")) || [
        { text: "The best way to predict the future is to create it.", category: "Motivation" },
        { text: "Do what you can, with what you have, where you are.", category: "Inspiration" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" },
        { text: "Believe you can and you're halfway there.", category: "Encouragement" },
        { text: "Your time is limited, so don’t waste it living someone else’s life.", category: "Life" }
    ];
    
    let selectedCategory = localStorage.getItem("selectedCategory") || "all";

    // Function to Save Quotes to Local Storage
    function saveQuotes() {
        localStorage.setItem("quotes", JSON.stringify(quotes));
    }

    // Function to Populate Categories in Dropdown
    function populateCategories() {
        categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
        const categories = [...new Set(quotes.map(q => q.category))];

        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        // Restore last selected category
        categoryFilter.value = selectedCategory;
    }

    // Function to Show Filtered Quotes
    function showFilteredQuotes() {
        let filteredQuotes = selectedCategory === "all" ? quotes : quotes.filter(q => q.category === selectedCategory);

        if (filteredQuotes.length === 0) {
            quoteDisplay.innerHTML = "<p>No quotes available for this category.</p>";
            return;
        }

        quoteDisplay.innerHTML = ""; // Clear existing quotes

        filteredQuotes.forEach(quote => {
            let quoteElement = document.createElement("p");
            quoteElement.innerHTML = `"${quote.text}" - <strong>${quote.category}</strong>`;
            quoteDisplay.appendChild(quoteElement);
        });
    }

    // Function to Add a New Quote
    function addQuote() {
        const newQuoteText = document.getElementById("newQuoteText").value.trim();
        const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

        if (newQuoteText === "" || newQuoteCategory === "") {
            alert("Please enter both a quote and a category.");
            return;
        }

        // Add New Quote to Array
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        saveQuotes();

        // Clear Input Fields
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        // Update Categories & Show Quotes
        populateCategories();
        showFilteredQuotes();
    }

    // Function to Filter Quotes Based on Selected Category
    function filterQuotes() {
        selectedCategory = categoryFilter.value;
        localStorage.setItem("selectedCategory", selectedCategory);
        showFilteredQuotes();
    }

    // Initialize Application
    populateCategories();
    showFilteredQuotes();

    // Event Listener for "Show New Quote" Button
    newQuoteButton.addEventListener("click", showFilteredQuotes);
});
