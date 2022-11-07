const addButton = document.getElementById("add-book")
const modal = document.getElementById("addBookModal")
const overlay = document.getElementById("addOverlay")
const submit = document.getElementById("submitBtn")
const gridBooks = document.getElementById("grid-books")

hasReadIt = true
let myLibrary = []

function Book(title, author, pages, haveRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

let bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
let bookTwo = new Book('Game of Thrones', 'George R. R. Martin', '694 pages', 'not read yet')


function addBookToLibrary(){
  myLibrary.push(bookOne)
  myLibrary.push(bookTwo)
  }
  addBookToLibrary()
  console.log(myLibrary)

  function showBook(book){
    let bookCard = document.createElement('div')
    let title = document.createElement('h4')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    let readBtn = document.createElement('button')
    let removeBtn = document.createElement('button')


    bookCard.classList.add('book-card')
    readBtn.classList.add('read')
    removeBtn.classList.add('remove')

    title.textContent = `${book.title}`
    author.textContent = `By: ${book.author}`
    pages.textContent = `number of pages: ${bookOne.pages}`
    removeBtn.textContent = "Remove"


      if (hasReadIt === true){
        readBtn.textContent = "Read"
        readBtn.style.cssText = "background-color: lightgreen;"
      } else {
        readBtn.textContent = "Not Read"
        readBtn.style.cssText = "background-color: lightred;"
      }

    gridBooks.appendChild(bookCard)
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
  }
showBook(bookOne)
showBook(bookTwo)

function bookCard(){
  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  gridBooks.appendChild(bookCard);
}

// When the user clicks the button, open the modal and overlay
addButton.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}

submit.onclick = function(){
  console.log('test')
}