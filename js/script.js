// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    "quote": "Here's the first quote",
    "source": "Some Guy",
    "citation": "The web",
    "year": "1995"
  },
  {
    "quote": "Here's the second quote",
    "source": "Some Other Guy",
    "citation": "The web",
  },
  {
    "quote": "Here's the third quote",
    "source": "That Dude",
    "year": "1995"
  },
  {
    "quote": "Here's the fourth quote",
    "source": "That One Chick"
  }
];

// DOM Nodes
var quoteWrapper = document.getElementById('quote-box')
var quoteContainer = document.querySelector('.quote');
var sourceContainer = document.querySelector('.source');
var citationContainer = document.querySelector('.citation');
var yearContainer = document.querySelector('.year');


function randomQuote() {
  return Math.floor(Math.random() * (quotes.length));
}

function printQuote() {
  var randomQuoteObject = randomQuote();
  console.log(randomQuoteObject);
  var quoteObject = quotes[randomQuoteObject];
  quoteContainer.textContent = quoteObject.quote;

  var fillSource = quoteObject.source;

  if(quoteObject.citation) {
    fillSource += '<span class="citation">' + quoteObject.citation + '</span>'
  }
  if(quoteObject.year) {
    fillSource += '<span class="citation">' + quoteObject.year + '</span>'
  }
  sourceContainer.innerHTML = fillSource;
}
