// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    "quote": "Here's the first quote",
    "source": "Some Guy",
    "citation": "The web",
    "year": "1995",
    "tags": ["poetry", "humor"]
  },
  {
    "quote": "Here's the second quote",
    "source": "Some Other Guy",
    "citation": "The web",
    "tags": ["goth rantings"]
  },
  {
    "quote": "Here's the third quote",
    "source": "That Dude",
    "year": "1995",
    "tags": ["amazing content"]
  },
  {
    "quote": "Here's the fourth quote",
    "source": "That One Chick",
    "tags": ["pretentious dialogue"]
  },
  {
    "quote": "Here's the fifth quote",
    "source": "That Other One Chick",
    "tags": ["forked tongue content"]
  },
  {
    "quote": "Here's the sixth quote",
    "source": "'lil dude from across the street",
    "year": '1985',
    "tags": ["pandering"]
  }
];

// cache DOM Nodes
var bodyContainer = document.querySelector('body');
var quoteWrapper = document.getElementById('quote-box')
var quoteContainer = document.querySelector('.quote');
var sourceContainer = document.querySelector('.source');
var citationContainer = document.querySelector('.citation');
var yearContainer = document.querySelector('.year');

function randomQuote() {
  // Keep track of quotes
  // This is currently a work in progress
  var recentQuotes = [];
  var newQuote = Math.floor(Math.random() * (quotes.length));
  return newQuote;
}

function printQuote() {
  applyHex();
  // Store random quote number as a variable
  var randomQuoteObject = randomQuote();
  // cache current quote object.
  var quoteObject = quotes[randomQuoteObject];
  // Set the quote text to the quoteContainer element.
  quoteContainer.textContent = quoteObject.quote;

  // Start laying out the items that will fill in the .source element.
  var fillSource = quoteObject.source;

  // Check to see if there's a citation in the quote object
  // If it's there, concatenate it with the fillSource container
  if(quoteObject.citation) {
    fillSource += '<span class="citation">' + quoteObject.citation + '</span>'
  }
  // Check to see if there's a year in the quote object
  // If it's there, concatenate it with the fillSource container
  if(quoteObject.year) {
    fillSource += '<span class="citation">' + quoteObject.year + '</span>'
  }
  // Set the content of the concated sourceContainer items to the fillSource
  // container
  sourceContainer.innerHTML = fillSource;
}

function randomHex() {
  // Thank you Stack Overflow Community for helping with this
  // random hex generator.
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function applyHex() {
  // Apply randomHex value as a background color to the body element.
  bodyContainer.style.backgroundColor = randomHex();
}
