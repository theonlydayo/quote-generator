const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const API = "kHckNMcACg3OvgCozfoBKScK09osZmQV9sXNZaTa";
const url = "https://api.api-ninjas.com/v2/randomquotes";

async function randomQuote() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": API,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    quote.textContent = `"${data[0].quote}"`;
    author.textContent = `— ${data[0].author}`;

  } catch (error) {
    quote.textContent = "Failed to load quote.";
    author.textContent = "";
    console.error(error);
  }
}

window.addEventListener("load", randomQuote);
btn.addEventListener("click", randomQuote);