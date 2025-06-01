const myLibrary = [];
const formSubmit = document.querySelector('.submit-button');

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}
	
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
// addBookToLibrary("1984", "George Orwell", 328, true);

function getFormInput() {
   let formInput = document.querySelectorAll('[id^="input-"]'); // bug: got called before event trigger
   console.log(formInput);
}

formSubmit.addEventListener('click', getFormInput());
