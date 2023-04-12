// HTML.
const quoteAuthor = document.querySelector("._author");
const quoteParagraph = document.querySelector(".quote-paragraph_");

const tweetButton = document.querySelector(".__tweet");
const newQuoteButton = document.querySelector(".__new-quote");

function generateQuote() {
	fetch("https://api.quotable.io/random")
		.then((response) => response.json())
		.then((data) => {
			quoteAuthor.innerText = `${data.author} quoted:`;
			quoteParagraph.innerText = data.content;

			tweetButton.setAttribute("href", `https://twitter.com/intent/tweet?text=“${data.content} - ${data.author}%0A%0A${window.location.href}`);
		})
		.catch((err) => {
			quoteAuthor.innerText = `Error quoted:`;
			quoteParagraph.innerText = err;

			tweetButton.removeAttribute("href");
		});
};

newQuoteButton.addEventListener("click", generateQuote);
document.addEventListener("DOMContentLoaded", () => generateQuote());