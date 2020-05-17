/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


// An array of objects, filled with 2Pac quotes.
var quotes = [
    {
        quote: 'Here’s a message to the newborns, waiting to breathe. If u believe than u can achieve just look at me.',
        source: '2Pac',
        citation: 'Smile',
        year: '1997',
        tag: ' Hip Hop'
     
    },

    {
        quote: 'Driven by my ambitions, desire higher positions. So I proceed to make Gs, eternally in my mission.',
        source: '2Pac',
        citation: 'Unconditional Love',
        year: '1998',
        tag: ' Hip Hop'
    },

    {
        quote: 'Don’t settle for less – even a genius asks-es questions. Be grateful for blessings. Don’t ever change, keep your essence.',
        source: '2Pac',
        citation: 'Me Against The World',
        year: '1995',
        tag: ' Hip Hop'
    },

    {
        quote: 'No one knows my struggle, they only see the trouble. Not knowing how hard it is to carry on when no one loves you.',
        source: '2Pac',
        citation: 'Thugz Mansion',
        year: '2002',
        tag: ' Hip Hop'
    },

    {
        quote: "Even though you’re fed up, you gotta keep your head up.",
        source: '2Pac',
        citation: "Keep ya' Head up",
        year: '1993',
        tag: ' Hip Hop'
    }
];

//console.log(quotes); Tested functions in console.log

// This function pulls random quotes from the array of objects.
function getRandomQuote(){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

//getRandomQuote(); Apart of the console.log testing


// This is a random background color selecting function. Found here --> https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";  
    document.body.style.background = bgColor;
    }

// This function calls the getRandomQuote function, builds a string of HTML quote properties, and then displays the quotes in the browser.
function printQuote(){
    randomQuote = getRandomQuote(quotes); 
     printHTML = '<p class="quote">' +  randomQuote.quote + '</p>';
     printHTML += '<p class="source">' + randomQuote.source;
    if(randomQuote.citation){
       printHTML += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if(randomQuote.year){
        printHTML += '<span class="year">' + randomQuote.year + '</span>';
    }
    if(randomQuote.tag){
        printHTML += '<span class="tag">' +  randomQuote.tag  +  '</span>';
    }
    
    printHTML += '</p>';
    document.getElementById('quote-box').innerHTML = printHTML; 
    random_bg_color();
  
}

// This method executes the printQuote function every 10 seconds. Found here --> https://www.w3schools.com/js/js_timing.asp
setInterval(printQuote, 10000);


//Will change the quote at random when "Show another Quote" button is pressed.

/***
* click event listener for the print quote button
* DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote')
   .addEventListener("click", printQuote, false);
