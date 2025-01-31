
let quotes = [
  { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" }
];

// Load quotes from local storage on page load
function loadQuotes() {
  const savedQuotes = localStorage.getItem('quotes');
  if (savedQuotes) {
    quotes = JSON.parse(savedQuotes);  // Load quotes from local storage
  }
}

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteElement = document.createElement('p');
  quoteElement.textContent = `"${quote.text}" - ${quote.category}`;
  document.getElementById('quoteDisplay').innerHTML = '';
  document.getElementById('quoteDisplay').appendChild(quoteElement);
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Add a new quote
function addQuote() {
  const quoteText = document.getElementById('newQuoteText').value;
  const quoteCategory = document.getElementById('newQuoteCategory').value;

  if (quoteText && quoteCategory) {
    quotes.push({ text: quoteText, category: quoteCategory });
    saveQuotes();  // Save updated quotes to local storage
    alert('New quote added!');
    showRandomQuote();  // Display the newly added quote
  } else {
    alert('Please fill in both fields!');
  }
}

// Export quotes to JSON
function exportToJson() {
  const json = JSON.stringify(quotes);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';  // File name for download
  a.click();
  URL.revokeObjectURL(url);
function exportToJson() {
  const json = JSON.stringify(quotes);  // Convert the quotes array to JSON string
  const blob = new Blob([json], { type: 'application/json' });  // Create a Blob object with JSON data
  const url = URL.createObjectURL(blob);  // Generate a URL for the Blob object
  
  const a = document.createElement('a');  // Create a link element
  a.href = url;  // Set the URL as the link's href
  a.download = 'quotes.json';  // Set the file name for download
  a.click();  // Trigger the download
  URL.revokeObjectURL(url);  // Clean up the URL object after download
}
}

// Import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);  // Add imported quotes to the array
    saveQuotes();  // Save updated quotes to local storage
    alert('Quotes imported successfully!');
function importFromJsonFile(event) {
  const fileReader = new FileReader();  // Create a new FileReader to read the file
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);  // Parse the file content as JSON
    quotes.push(...importedQuotes);  // Add the imported quotes to the quotes array
    saveQuotes();  // Save the updated quotes array to local storage
    alert('Quotes imported successfully!');  // Notify the user
  };
  fileReader.readAsText(event.target.files[0]);  // Read the selected file as text
}
  };
  fileReader.readAsText(event.target.files[0]);
}

// Initialize the app
window.onload = function() {
  loadQuotes();  // Load quotes from local storage
  showRandomQuote();  // Show a random quote
};
