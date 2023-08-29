const myLibrary = [];


// function Book(name, author,  numberOfPages, read){
//     this.name = name;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
//     this.read = read;

// }

class Book{
    constructor(name, author, numberOfPages, read){
        this.name = name;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }
}

function createBookNode(book){
    const newBook = document.createElement("div");
    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = book.name;
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "Author: " + book.author   
    const numberOfPages = document.createElement("p");
    numberOfPages.classList.add("numberOfPages");
    numberOfPages.textContent = "Number of pages: " + book.numberOfPages; 
    const read = document.createElement("p");
    read.classList.add("read");
    read.textContent = "Read: " + book.read;
    const buttonContainer = createButtons();
    newBook.appendChild(name);
    newBook.appendChild(author);    
    newBook.appendChild(numberOfPages);
    newBook.appendChild(read);
    newBook.appendChild(buttonContainer);
    
    return newBook;
}

function createButtons(){
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", e => deleteBook(e));
    const readButton = document.createElement("button");
    readButton.textContent = "Read?";
    readButton.classList.add("read-button");
    readButton.addEventListener("click", e => changeReadStatus(e));
    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(deleteButton);
    


    return buttonContainer;
}

function updateBooks(book){    
        const container = document.querySelector("#container");
        const newBook = createBookNode(book);
        newBook.setAttribute("index", myLibrary.indexOf(book));            
        container.appendChild(newBook);   
    }





function addBookToLibrary(){
    const name = prompt("Enter the book's name: ");
    const author = prompt("Enter the author's name: ");
    const numberOfPages = prompt("Enter the number of pages: ");
    const read = prompt("Did you read the book? Answer 'Yes' or 'No'.");
    const book = new Book(name, author, numberOfPages, read);
    myLibrary.push(book);
    updateBooks(book);
}

function deleteBook(event){    
    const bookDiv = event.target.parentElement.parentElement;
    const bookIndex = bookDiv.getAttribute('index');
    myLibrary.splice(bookIndex, 1);
    document.querySelector("#container").removeChild(bookDiv);
}

function changeReadStatus(event){
    const bookNode = event.target.parentElement.parentElement;
    console.log(bookNode);
    const bookIndex = bookNode.getAttribute('index');
    const book = myLibrary[bookIndex];
    if(book.read === "No"){
        const answer = prompt("Did you read this book?");
        if(answer === "Yes"){
            book.read = "Yes";
            const readNode = bookNode.querySelector(".read");
            readNode.textContent = "Read: " + book.read;
            alert(`Book ${book.name} read!`);
        }

    }else{
        alert(`Book ${book.name} already read!`);
    }

}

const book1 = new Book("Dom Casmurro", "Machado de Assis", "327", "Yes");
const book2 = new Book("Lord of The Rings", "JRR Tolkien", "947", "No");

const buttonNewBook = document.querySelector("#new-book");
buttonNewBook.addEventListener("click", addBookToLibrary);



myLibrary.push(book1);
myLibrary.push(book2);

updateBooks(book1);
updateBooks(book2);

// const deleteButtonList = document.querySelectorAll(".delete-button");
// deleteButtonList.forEach(btn => btn.addEventListener("click", e => deleteBook(e)));

// const readButtonList = document.querySelectorAll(".read-button");
// readButtonList.forEach(btn => btn.addEventListener("click", e => changeReadStatus(e)));




console.log(myLibrary);





