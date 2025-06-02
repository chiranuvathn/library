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

function getFormInput() {
    const formInput = document.querySelectorAll('[id^="input-"]');
   
    formInput.forEach((i) => {
      console.log(i.value);
    }); 
}

if (formSubmit) {
    formSubmit.addEventListener("click", getFormInput);
}

