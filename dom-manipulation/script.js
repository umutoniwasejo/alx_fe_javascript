// Sample quotes data stored in localStorage for testing
const sampleQuotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Motivation" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", category: "Inspiration" }
];

if (!localStorage.getItem("quotes")) {
    localStorage.setItem("quotes", JSON.stringify(sampleQuotes));
}

document.addEventListener("DOMContentLoaded", () => {
    populateCategories();
    filterQuotes();
});

function populateCategories() {
    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    const categoryFilter = document.getElementById("categoryFilter");
    
    const categories = [...new Set(quotes.map(q => q.category))];
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    
    categories.forEach(category => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
    
    const lastFilter = localStorage.getItem("selectedCategory");
    if (lastFilter) {
        categoryFilter.value = lastFilter;
        filterQuotes();
    }
}

function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    localStorage.setItem("selectedCategory", selectedCategory);
    
    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.innerHTML = "";
    
    quotes
        .filter(q => selectedCategory === "all" || q.category === selectedCategory)
        .forEach(q => {
            let quoteDiv = document.createElement("div");
            quoteDiv.classList.add("quote");
            quoteDiv.innerHTML = `<p>${q.text}</p><small>- ${q.author} (${q.category})</small>`;
            quoteContainer.appendChild(quoteDiv);
        });
}

function addQuote(text, author, category) {
    let quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    quotes.push({ text, author, category });
    localStorage.setItem("quotes", JSON.stringify(quotes));
    
    populateCategories();
    filterQuotes();
}

    


 

