async function fetchRandomQuote() {
     const options = {
     method: "GET",
     headers: {
     "X-RapidAPI-Key": "668da4a3ebmsh1bc1771010f5a46p1a3a46jsna57cccffa227",
     "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
     };
    
     try {
     const response = await fetch(
     "https://quotes15.p.rapidapi.com/quotes/random/",
     options
     );
     const data = await response.json();
     const quoteContainer = document.getElementById("quoteContainer");
     quoteContainer.innerHTML = `<p>${data.content}</p><p>- ${data.originator.name}</p>`;
     } catch (error) {
     console.error(error);
     const quoteContainer = document.getElementById("quoteContainer");
     quoteContainer.innerHTML =
     "<p>Failed to fetch a quote. Please try again later.</p>";
     }
    }
    
    const fetchButton = document.getElementById("fetchButton");
    fetchButton.addEventListener("click", fetchRandomQuote);
    