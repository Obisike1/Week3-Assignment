const container = document.getElementById("container");
// Function to fetch and display data
async function fetchData(endpoint) {
    try {
      // Fetch data from the endpoint
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
      const data = await response.json();
  
      // Create a card for each item
      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
  
        // Add item details to the card
        card.innerHTML = `
          <h2>${item.title}</h2>
          <p>${item.body}</p>
        `;
  
        // Add the card to the container
        container.appendChild(card);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  // Fetch and display data from three endpoints
  fetchData("posts");
  fetchData("comments");
  fetchData("todos");