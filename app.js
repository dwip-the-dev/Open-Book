
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
        <a href="books/${book.file}" download target="_blank">📥 Download from Site</a>
        <a href="${book.link}" target="_blank">🌐 Download from Source</a>
      `;

      container.appendChild(bookDiv);
    });

    const searchBox = document.getElementById("search");
    searchBox.addEventListener("input", () => {
      const query = searchBox.value.toLowerCase();
      document.querySelectorAll(".book").forEach(div => {
        const isVisible = div.innerText.toLowerCase().includes(query);
        div.style.display = isVisible ? "block" : "none";
      });
    });
  });
