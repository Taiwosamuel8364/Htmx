const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <link rel="stylesheet" href="/styles.css">
      <script src="/htmx.min.js"></script>
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="search" style="text-align: center;">
          <input
            type="search"
            name="search"
            placeholder="search by book title...."
            hx-post="/books/search"
            hx-trigger="keyup changed delay: 300ms"
            hx-target=".book-list"
          >
        </div>
      
        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list">Show More</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form
            hx-on::after-request = "document.querySelector('form').reset()"
            hx-post="/books" 
            hx-target=".book-list ul" 
            hx-swap="beforeend"
          >
            <input 
              type="text"
              name="title"
              placeholder="title"
              required
            />
            <input 
              type="text"
              name="author"
              placeholder="author"
              required
            />
            <button>Add book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;

// <script src="https://unpkg.com/htmx.org@1.9.12"></script>