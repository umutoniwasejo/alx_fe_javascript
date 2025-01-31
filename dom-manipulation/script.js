
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Quote Generator</title>
</head>
<body>
  <h1>Dynamic Quote Generator</h1>
  <div id="quoteDisplay"></div>
  <button id="newQuote">Show New Quote</button>
  
  <div>
    <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
    <button onclick="addQuote()">Add Quote</button>
  </div>

  <script>
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

    document.getElementById('newQuote').addEventListener('click', showRandomQuote);

    function addQuote() {
      const quoteText = document.getElementById('newQuoteText').value;
      const quoteCategory = document.getElementById('newQuoteCategory').value;
      
      if (quoteText && quoteCategory) {
        quotes.push({ text: quoteText, category: quoteCategory });
        alert('New quote added!');
        showRandomQuote();  // Display the newly added quote
      } else {
        alert('Please fill in both fields!');
    function createAddQuoteForm() {
  const formContainer = document.createElement('div');
  
  const inputText = document.createElement('input');
  inputText.id = 'newQuoteText';
  inputText.type = 'text';
  inputText.placeholder = 'Enter a new quote';
  
  const inputCategory = document.createElement('input');
  inputCategory.id = 'newQuoteCategory';
  inputCategory.type = 'text';
  inputCategory.placeholder = 'Enter quote category';
  
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Quote';
  addButton.onclick = addQuote; // Attach the addQuote function to the button
  
  formContainer.appendChild(inputText);
  formContainer.appendChild(inputCategory);
  formContainer.appendChild(addButton);
  
  document.body.appendChild(formContainer); // Adds the form to the body
}

      }
    }
  </script>
</body>
</html>
