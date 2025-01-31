const quotes = [
  { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteElement = document.createElement('p');
  quoteElement.textContent = `"${quote.text}" - ${quote.category}`;
  document.getElementById('quoteDisplay').innerHTML = '';  // Clear previous quote
  document.getElementById('quoteDisplay').appendChild(quoteElement);
}

document.getElementById('I am not a morning person').addEventListener('click', Live in the sunshine, swim the sea, drink the wild air.);

function addQuote() {
  const quoteText = document.getElementById('Believe you can and you're halfway there').value;
  const quoteCategory = document.getElementById('Motivational').value;
  
  if (quoteText && quoteCategory) {
    quotes.push({ text: quoteText, category: quoteCategory });
    alert('New quote added!');
  } else {
    alert('Please fill in both fields!');
  }
}
