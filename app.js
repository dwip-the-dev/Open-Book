// Get the current folder based on the URL
const currentFolder = location.pathname
  .split("/")
  .filter(part => part.trim() !== "")
  .slice(-1)[0]
  .replace(".html", "");

const metadataPath = `books/${currentFolder}/metadata.json`;

fetch(metadataPath)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("book-list");

    data.forEach(book => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "book";

      bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <a href="${book.link}" download target="_blank" rel="noopener noreferrer">📥 Download</a>
      `;

      container.appendChild(bookDiv);
    });
  })
  .catch(err => {
    console.error("❌ Failed to load metadata:", err);
    document.getElementById("book-list").innerHTML =
      "<p>⚠️ Couldn't load book list. Check metadata.json or path.</p>";
  });
