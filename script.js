const myLibrary = [];

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

function addBookToLibrary() {
    const formSubmit = document.querySelector('.submit-button');
    const formInputs = document.querySelectorAll('[id^="input-"]'); 

    formSubmit.addEventListener('click', () => {
        const formProperties = {};

        formInputs.forEach((input) => {
            const property = input.dataset.property; // get the 'data-property' attribute from HTML
            formProperties[property] = input.value; 
        });
        
        let newBook = new Book(
            formProperties.title, 
            formProperties.author, 
            formProperties.pages, 
            formProperties.isRead
        );
        
        myLibrary.push(newBook);

        displayBook(myLibrary);
    });

}

function displayBook(myLibrary) {
    const displayCard = document.querySelector('.cards');
    const div = document.createElement('div');

    myLibrary.forEach((book) => {
        div.innerHTML = `
            <span>${book.title}</span>
            <span>${book.author}</span>
            <span>${book.pages}</span>
            <span>${book.isRead}</span>
          `;
        displayCard.appendChild(div);
    }); 
}

addBookToLibrary();
