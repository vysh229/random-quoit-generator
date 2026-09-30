const quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuote");

newQuoteButton.addEventListener("click", function() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex].quote;
    authorText.textContent = "- " + quotes[randomIndex].author;

});