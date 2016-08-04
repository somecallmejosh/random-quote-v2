// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(printQuote, 30000);

var quotes = [
  {
    "quote": "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.",
    "source": "Plato",
    "citation": "internet",
    "year": "427BC - 327BC",
    "tags": "old school"
  },
  {
    "quote": "One good thing about music, when it hits you, you feel no pain",
    "source": "Bob Marley",
    "citation": "The web",
    "year": "1945-1981",
    "tags": "feel good"
  },
  {
    "quote": "Without music, life would be a mistake",
    "source": "Friedrich Nietzche",
    "citation": "The web",
    "year": "1844-1900",
    "tags": ["old school", "feel good"]
  },
  {
    "quote": "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.",
    "source": "Maya Angelou",
    "citation": "The web",
    "year": "1928-2014",
    "tags": ["old school", "feel good"]
  },
  {
    "quote": "I was born with music inside me. Music was one of my parts. Like my ribs, my kidneys, my liver, my heart. Like my blood. It was a force already within me when I arrived on the scene. It was a necessity for me - like food or water.",
    "source": "Ray Charles",
    "citation": "The web",
    "year": "1930-2004",
    "tags": "feel good"
  },
  {
    "quote": "Music is everybody's possession. It's only publishers who think that people own it.",
    "source": "John Lennon",
    "citation": "The web",
    "year": '1940-1980',
    "tags": "business"
  }
];

// cache DOM Containers
var bodyContainer = document.querySelector('body');
var quoteWrapper = document.getElementById('quote-box');
var quoteContainer = document.querySelector('.quote');
var sourceContainer = document.querySelector('.source');
var citationContainer = document.querySelector('.citation');
var yearContainer = document.querySelector('.year');

// Keep track of viewed quotes
var viewedQuotes = [];

function randomQuote() {
  // Generate a random number that corresponds to the
  // total number of quotes.
  var newQuote = Math.floor(Math.random() * (quotes.length));
  // splice the object from the quote array and store it in a variable.
  var splicedQuote = quotes.splice(newQuote, 1)[0];
  // Push the new quote to the viewedQuotes Array.
  viewedQuotes.push(splicedQuote);

  if(quotes.length === 0) {
    // If all quotes have been spliced off, reset quotes to the newly created
    // quotes array, and then reset viewedQuotes to an empty array
    quotes = viewedQuotes;
    viewedQuotes = [];
  }
  // return the newly spliced quote
  return splicedQuote;
}

function printQuote() {
  // Store random quote number as a variable
  var randomQuoteObject = randomQuote();
  quoteContainer.textContent = randomQuoteObject.quote;

  // Start laying out the items that will fill in the .source element.
  var fillSource = randomQuoteObject.source;

  // Check to see if there's a citation in the quote object
  // If it's there, concatenate it with the fillSource container
  if(randomQuoteObject.citation) {
    fillSource += '<span class="citation">' + randomQuoteObject.citation + '</span>';
  }
  // Check to see if there's a year in the quote object
  // If it's there, concatenate it with the fillSource container
  if(randomQuoteObject.year) {
    fillSource += '<span class="year">' + randomQuoteObject.year + '</span>';
  }

  if(randomQuoteObject.tags) {
    fillSource += '<div class="tags">Tags: ' + randomQuoteObject.tags + '</div>';
  }
  // Set the content of the concated sourceContainer items to the fillSource
  // container
  sourceContainer.innerHTML = fillSource;
  randomBgColor();
}

function randomBgColor() {
  // Generate randomHex value
  var randomHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  // Apply random hex value to bgc.
  bodyContainer.style.backgroundColor = randomHex;
}
