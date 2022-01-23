/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = [];
quotes.push(
    {
        quote: "Very great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        source: "Mark Twain",
        year: "2022"
    },
    {
        quote: "Things do not happen. Things are made to happen.",
        source: "John F. Kennedy",
        citation: "BrainyQuote",
        year: "2022"
    },
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney",
        citation: "BrainyQuote",
    }, 
    {
        quote: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
        source: "Thomas Jefferson",
        citation: "BrainyQuote",
    }, 
    {
        quote: "You can't build a reputation on what you are going to do.",
        source: "Henry Ford",
    }, 
    {
        quote: "If you can't explain it simply, you don't understand it well enough.",
        source: "Albert Einstein",
        year: "2022"
    }, 
    {
        quote: "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
        source: "Nikola Tesla",
        citation: "BrainyQuote",
        year: "2022"
    }
);


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}


/***
 * `printQuote` function
***/
function printQuote() {
    let ranQuote = getRandomQuote();

    let returnHtmlTxt = "<p class='quote'>" + ranQuote.quote + "</p>";
    returnHtmlTxt += "<p class='source'>" + ranQuote.source;
    if (ranQuote.citation !== undefined) {
        returnHtmlTxt += "<span class='citation'>" + ranQuote.citation + "</span>";
    }

    if (ranQuote.year !== undefined) {
        returnHtmlTxt += "<span class='year'>" + ranQuote.year + "</span>";
    }

    returnHtmlTxt += "</p>";

    document.getElementById('quote-box').innerHTML = returnHtmlTxt;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);