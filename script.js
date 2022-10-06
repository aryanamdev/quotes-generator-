let quote = document.getElementById("quote");
let author = document.querySelector(".author");
let btn = document.querySelector(".btn");
let url = "https://api.quotable.io/random";

console.log(author.innerText);

function randomQuote() {
  btn.innerText = "Loading Quote";
  fetch(url)
    .then((data) => data.json())
    .then((result) => {
      console.log(result);

      quote.innerText = result.content;
      author.innerText = `- ${result.author}`;
      btn.innerText = "Generate New Quote";
    });
}

btn.addEventListener("click", randomQuote());
btn.addEventListener("click", randomQuote);
