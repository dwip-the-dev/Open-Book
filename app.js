fetch('books/metadata.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("book-list");

    data.forEach(book => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "book";

      bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <a href="${book.link}" download="${book.file}" target="_blank" rel="noopener noreferrer">📥 Download PDF</a>
      `;

      container.appendChild(bookDiv);
    });

    // 🔍 Live search support
    const searchBox = document.getElementById("search");
    searchBox.addEventListener("input", () => {
      const query = searchBox.value.toLowerCase();
      document.querySelectorAll(".book").forEach(div => {
        const isVisible = div.innerText.toLowerCase().includes(query);
        div.style.display = isVisible ? "block" : "none";
      });
    });
  })
  .catch(err => {
    console.error("Failed to load metadata:", err);
    document.getElementById("book-list").innerHTML = "<p>⚠️ Failed to load book list. Please try again later.</p>";
  });
