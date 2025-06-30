fetch("categories.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("category-list");
    data.forEach(cat => {
      const div = document.createElement("div");
      div.className = "book"; // reuse styling

      div.innerHTML = `
        <h2>${cat.name}</h2>
        <p>${cat.description}</p>
        <a href="${cat.link}">📂 Open</a>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Failed to load categories:", err);
    document.getElementById("category-list").innerHTML = "<p>⚠️ Failed to load categories.</p>";
  });
