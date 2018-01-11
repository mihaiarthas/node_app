const SERVER = '127.0.0.1';
var books = [];
var authors = [];
var bookId = -1;
var authId = -1;

function loadAllAuthors() {
    showLoader();
    axios.get(SERVER + '/api/author')
        .then((response) => {
            hideLoader();
            this.authors = response.data;
            let items = response.data
            let displayTable = document.getElementById('display')
            displayTable.innerHTML = '';
            for (let item of items) {
                let rowContent = `
          <td>${item.id}</td>     
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.booksNumber}</td>
          <td>
            <input type=button value=delete />
          </td>
         `
                let row = document.createElement('tr')
                row.id = item.id;
                row.addEventListener("dblclick", function() {
                    console.log(row.id);
                    getAuthorById(row.id);
                });
                row.innerHTML = rowContent
                displayTable.appendChild(row)
                let deleteButton = document.querySelector('tr:last-child input[value=delete]')
                deleteButton.onclick = () => {
                    deleteAuthor(item.id)
                }
            }
        })
        .catch(() => console.log('ERROR'))
}

function loadAllBooks() {
    showLoader();
    axios.get(SERVER + '/api/book')
        .then((response) => {
            hideLoader();
            this.books = response.data;
            let items = response.data
            let displayTable = document.getElementById('display')
            displayTable.innerHTML = '';
            for (let item of items) {
                let rowContent = `
            <td>${item.id}</td>   
          <td>${item.name}</td>
          <td>${item.publishingHouse}</td>
          <td>${item.year}</td>
          <td>${item.review}</td>
          <td>
            <input type=button value=delete />
          </td>
         `
                let row = document.createElement('tr')
                row.id = item.id;
                row.addEventListener("dblclick", function() {
                    console.log(row.id);
                    getBookById(row.id);
                });
                row.innerHTML = rowContent
                displayTable.appendChild(row)
                let deleteButton = document.querySelector('tr:last-child input[value=delete]')
                deleteButton.onclick = () => {
                    deleteBook(item.id)
                }
            }
        })
        .catch(() => console.log('ERROR'))
}


function deleteBook(id) {
    axios.delete(SERVER + '/api/book/' + id)
        .then(() => loadAllBooks())
        .catch(() => console.log('Error'))
    bookId = -1;
    document.getElementById('updateB').disabled = true;

}

function deleteAuthor(id) {
    axios.delete(SERVER + '/api/author/' + id)
        .then(() => loadAllAuthors())
        .catch(() => console.log('Error'))
    authId = -1;
    document.getElementById('updateA').disabled = true;
}

function addBook() {
    let book = {
        name: document.getElementById('nameBook').value,
        publishingHouse: document.getElementById('publishingHouse').value,
        year: document.getElementById('year').value,
        review: document.getElementById('review').value,
        authorId: document.getElementById('authorId').value
    }
    axios.post(SERVER + '/api/book', book)
        .then(() => loadAllBooks())
        .catch(() => console.log('Error'));
}

function updateBook() {
    let book = {
        name: document.getElementById('nameBook').value,
        publishingHouse: document.getElementById('publishingHouse').value,
        year: document.getElementById('year').value,
        review: document.getElementById('review').value,
        authorId: document.getElementById('authorId').value
    }
    axios.put(SERVER + '/api/book/' + bookId, book)
        .then(() => loadAllBooks())
        .catch(() => console.log('Error'));
}

function updateAuth() {
    let author = {
        name: document.getElementById('nameAuthor').value,
        age: document.getElementById('age').value,
        booksNumber: document.getElementById('booksNumber').value,
    }
    axios.put(SERVER + '/api/author/' + authId, author)
        .then(() => loadAllAuthors())
        .catch(() => console.log('Error'));
}

function addAuthor() {
    let author = {
        name: document.getElementById('nameAuthor').value,
        age: document.getElementById('age').value,
        booksNumber: document.getElementById('booksNumber').value,
    }
    axios.post(SERVER + '/api/author', author)
        .then(() => loadAllAuthors())
        .catch(() => console.log('Error'));
}

function getBookById(id) {
    axios.get(SERVER + '/api/book/' + id)
        .then((response) => {
            var book = response.data;
            bookId = book.id;
            console.log(book);
            fillBookForm(book);
        })
        .catch(() => console.log('ERROR'))
}

function getAuthorById(id) {
    axios.get(SERVER + '/api/author/' + id)
        .then((response) => {
            var auth = response.data;
            authId = auth.id;
            console.log(auth);
            fillAuthorForm(auth);
        })
        .catch(() => console.log('ERROR'))
}

function fillBookForm(book) {
    document.getElementById('nameBook').value = book.name,
        document.getElementById('publishingHouse').value = book.publishingHouse,
        document.getElementById('year').value = book.year,
        document.getElementById('review').value = book.review,
        document.getElementById('authorId').value = book.authorId

    document.getElementById('updateB').disabled = false;
}

function fillAuthorForm(auth) {
    document.getElementById('nameAuthor').value = auth.name,
        document.getElementById('age').value = auth.age,
        document.getElementById('booksNumber').value = auth.booksNumber

    document.getElementById('updateA').disabled = false;
}

function showLoader() {
    let loader = document.getElementById('load');
    loader.style.display = '';
    let displayTable = document.getElementById('display')
    displayTable.innerHTML = '';
}

function hideLoader() {
    let loader = document.getElementById('load');
    loader.style.display = 'none';
}