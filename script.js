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

newSubmit.addEventListener('click', addBooktoLibrary);

newCancel.addEventListener('click', cancelNew);

function addBooktoLibrary() {
    event.preventDefault();
    let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newIsRead.checked);
    newBookModal.style.display = 'none';
    myLibrary.push(newBook);
    let index = myLibrary.length - 1;
    addBookToScreen(index);
    console.log(index);
    newBookForm.reset();
};

function addBookToScreen (index) {
    const bookCard = document.createElement('div');
    bookCard.classList = 'book-card';
    library.appendChild(bookCard);

    const bookTitle = document.createElement('h2');
    bookTitle.innerText = myLibrary[index].title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('h2');
    bookAuthor.innerText = 'by ' + myLibrary[index].author;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('h2');
    bookPages.innerText = myLibrary[index].pages + ' pages';
    bookCard.appendChild(bookPages);

    const isReadLabel = document.createElement('label');
    isReadLabel.classList = 'read-label';
    bookCard.appendChild(isReadLabel);

    const notReadText = document.createElement('p');
    notReadText.innerHTML = 'Not Read';
    isReadLabel.appendChild(notReadText);

    const readCheckbox = document.createElement('input');
    readCheckbox.setAttribute('type', 'checkbox');
    readCheckbox.classList = 'is-read';
    if (myLibrary[index].isRead === true) {
        readCheckbox.checked = true;
        bookCard.classList.add('read')
    };
    isReadLabel.appendChild(readCheckbox);

    const readSpan = document.createElement('span');
    readSpan.classList = 'is-read-toggle';
    isReadLabel.appendChild(readSpan);

    const readText = document.createElement('p');
    readText.innerText = 'Read';
    isReadLabel.appendChild(readText);

    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete';
    bookCard.appendChild(deleteButton);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList = 'fa-solid fa-trash-can';
    deleteIcon.setAttribute('title', 'Delete');
    deleteButton.appendChild(deleteIcon);

    const editButton = document.createElement('button');
    editButton.classList = 'edit';
    bookCard.appendChild(editButton);

    const editIcon = document.createElement('i');
    editIcon.classList = 'fa-solid fa-pencil';
    editIcon.setAttribute('title', 'Edit');
    editButton.appendChild(editIcon);
};

function cancelNew() {
    newBookForm.reset();
    newBookModal.style.display = 'none';
};

