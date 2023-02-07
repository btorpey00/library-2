const addNewButton = document.getElementById('add-new-button');
const newBookForm = document.getElementById('new-book-form');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const newPages = document.getElementById('new-pages');
const newIsRead = document.getElementById('new-read');
const newCancel = document.getElementById('new-cancel');
const newSubmit = document.getElementById('new-submit');    
const newBookModal = document.getElementById('new-book-modal');
const library = document.getElementById('library');

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

addNewButton.addEventListener('click', addNewBook);

function addNewBook() {
    newBookModal.style.display = 'block';   
};

newSubmit.addEventListener('click', addBooktoLibrary) 

function addBooktoLibrary() {
    event.preventDefault();
    let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newIsRead.checked);
    newBookModal.style.display = 'none';
    myLibrary.push(newBook);
    newBookForm.reset();
};

const test = document.getElementById('test');
test.addEventListener('click', () => {
    console.log(myLibrary)
});
