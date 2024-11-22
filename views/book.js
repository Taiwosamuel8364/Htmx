const createBookTemplate = (book) => `
  <li data-id='${book.id}'>
    <div
     hx-get="/books/edit/${book.id}"
     hx-target="closest li"
     class="details">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    </div>
    <button hx-delete="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">delete</button>
  </li>
`;
export default createBookTemplate;