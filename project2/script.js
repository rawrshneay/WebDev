const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay positive. Work hard. Make it happen."
];

function newQuote() {
  const quoteEl = document.getElementById('quote');
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = randomQuote;
    quoteEl.style.opacity = 1;
  }, 500);
}

window.onload = newQuote;
