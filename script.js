document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote");
    const twitterShareButton = document.getElementById("twitter-share");
    const facebookShareButton = document.getElementById("facebook-share");
    const instagramShareButton = document.getElementById("instagram-share");

    function fetchQuote() {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                quoteElement.textContent = data.content;
                updateShareLinks(data.content);
            })
            .catch((error) => console.error("Error fetching quote:", error));
    }

    function updateShareLinks(quote) {
        twitterShareButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote
    )}`;
        facebookShareButton.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      quote
    )}`;

    }

    newQuoteButton.addEventListener("click", fetchQuote);

    fetchQuote(); // Fetch initial quote on load
});