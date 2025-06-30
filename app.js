const categories = [
  { name: "📖 Classics", path: "books/Classics" },
  { name: "💻 Tech", path: "books/Tech" },
  { name: "👶 Children Books", path: "books/children_book" },
  { name: "🩸 Berserk Manga", path: "books/berserk-manga" },
  { name: "🆕 New Uploads", path: "books/new" }
];

const container = document.getElementById("category-list");

categories.forEach(cat => {
  const div = document.createElement("div");
  div.className = "category-card";

  div.innerHTML = `
    <h2>${cat.name}</h2>
    <a href="${cat.path}/index.html">📂 Open Category</a>
  `;

  container.appendChild(div);
});
