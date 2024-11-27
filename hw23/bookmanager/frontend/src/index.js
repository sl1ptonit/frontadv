const apiUrl = 'http://localhost:3000';


async function getBooks() {
 const response = await fetch(`${apiUrl}/books`);
 const books = await response.json();
    renderBooks(books);
}

async function deleteBook(bookId) {
    await fetch(`${apiUrl}/books/${bookId}`, {
	method: 'DELETE',
    });

    await getBooks();
}

async function addBook(e) {
 e.preventDefault();

 const title = document.querySelector('#title').value;
 const author = document.querySelector('#author').value;
 const year = document.querySelector('#year').value;

  await fetch(`${apiUrl}/books`, {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      title: title,
      author: author,
      year: year,
     })
  });

    await getBooks();
    document.querySelector('#addBookForm').reset();
}

async function editBook(e) {
    e.preventDefault();

    const id = document.getElementById('editId').value;
    const title = document.getElementById('editTitle').value;
    const author = document.getElementById('editAuthor').value;
    const year = document.getElementById('editYear').value;

    const updateBook = {title, author, year};

    await fetch(`${apiUrl}/books/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateBook)
    })

    document.querySelector('#editModal').classList.add('hidden');
    await getBooks();
}


//DOM
function renderBooks(books) {
    const booksList = document.querySelector('#booksList');
    booksList.innerHTML = '';

    books.forEach(book => {
	const bookItem = document.createElement('div');
	bookItem.className = 'book-item';

	bookItem.innerHTML = `	    
		<span>${book.title} by ${book.author} (${book.year})</span>
	    <div>
		<button class="edit" onclick="openEditModal('${book.id}', '${book.title}', '${book.author}', '${book.year}')">Edit</button>
		<button onclick="deleteBook(${book.id})">Delete</button>
	    </div>
	    `;

	booksList.appendChild(bookItem);
    });
}

function openEditModal(id, title, author, year) {
    document.getElementById('editModal').classList.remove('hidden');
    document.getElementById('editId').value = id;
    document.getElementById('editTitle').value = title;
    document.getElementById('editAuthor').value = author;
    document.getElementById('editYear').value = year;
}

document.getElementById('cancelEdit').addEventListener('click', () => {
    document.getElementById('editModal').classList.add('hidden');
});

document.querySelector('#addBookForm').addEventListener('submit', addBook);
document.querySelector('#editBookForm').addEventListener('submit', editBook);

getBooks();