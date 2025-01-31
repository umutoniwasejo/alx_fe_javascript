function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));  // Save the quotes array as a JSON string
}
function loadQuotes() {
  const savedQuotes = localStorage.getItem('quotes');
  if (savedQuotes) {
    quotes = JSON.parse(savedQuotes);  // Parse the saved JSON string back into an array
    displayRandomQuote();  // Optionally, display a random quote after loading
  }
}
document.addEventListener('DOMContentLoaded', loadQuotes);
function saveLastViewedQuote(quote) {
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(quote));  // Store the last viewed quote in session storage
}

function loadLastViewedQuote() {
  const lastQuote = sessionStorage.getItem('lastViewedQuote');
  if (lastQuote) {
    return JSON.parse(lastQuote);  // Retrieve and parse the last viewed quote
  }
  return null;
}
function exportToJson() {
  const json = JSON.stringify(quotes);  // Convert quotes array to JSON string
  const blob = new Blob([json], { type: 'application/json' });  // Create a Blob object
  const url = URL.createObjectURL(blob);  // Create a URL for the Blob

  const a = document.createElement('a');  // Create an anchor tag for the download
  a.href = url;
  a.download = 'quotes.json';  // Set file name for download
  a.click();  // Simulate the click to trigger download
  URL.revokeObjectURL(url);  // Clean up URL object
}
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);  // Parse the uploaded JSON
    quotes.push(...importedQuotes);  // Add the imported quotes to the array
    saveQuotes();  // Save the updated quotes to local storage
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);  // Read the selected file as text
}
let quotes = [];  // Initialize quotes array

document.addEventListener('DOMContentLoaded', loadQuotes);

function loadQuotes() {
  const savedQuotes = localStorage.getItem('quotes');
  if (savedQuotes) {
    quotes = JSON.parse(savedQuotes);
    displayRandomQuote();
  }
}

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quoteDisplay').innerText = randomQuote.text;
}

function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  const newQuote = { text: newQuoteText, category: newQuoteCategory };

  quotes.push(newQuote);
  saveQuotes();
  displayRandomQuote();
}

function exportToJson() {
  const json = JSON.stringify(quotes);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}
