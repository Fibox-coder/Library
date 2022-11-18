const addButton = document.getElementById("add-book")
const modal = document.getElementById("addBookModal")
const overlay = document.getElementById("addOverlay")
const submit = document.getElementById("submitBtn")
const gridBooks = document.getElementById("grid-books")
let removeBtn = document.createElement('button')
let myLibrary = []

function Book(title, author, pages, haveRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

let bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false)
let bookTwo = new Book('Game of Thrones', 'George R. R. Martin', '694 pages', true)
myLibrary.push(bookOne)
myLibrary.push(bookTwo)

function addBookToLibrary(){
  const nextBook = getInput()
  myLibrary.push(nextBook)
  console.log(myLibrary) 
  createBookItem(nextBook, myLibrary.lastIndexOf(nextBook))
  setData(); //saves updated array in local storage
  return myLibrary
  }

// Creates the layout for one Book
function createBookItem(book, index){
  let bookCard = document.createElement('div')
  let title = document.createElement('h4')
  let author = document.createElement('p')
  let pages = document.createElement('p')
  let readBtn = document.createElement('button')
  let removeBtn = document.createElement('button')
  

  bookCard.setAttribute('id', index)

  bookCard.classList.add('book-card')
  readBtn.classList.add('read')
  removeBtn.classList.add('remove') 

  title.textContent = `${book.title}`
  author.textContent = `By: ${book.author}`
  pages.textContent = `number of pages: ${book.pages}`
  removeBtn.textContent = "Remove"


  if (book.haveRead === true){
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

  removeBtn.onclick = function(){
    myLibrary.splice(myLibrary.indexOf(book),1);
    removeBtn.parentElement.remove();
    setData()
    console.log(myLibrary)
  }

  readBtn.onclick = function(){
    if (book.haveRead === true){
      book.haveRead = false
      readBtn.textContent = "Not Read"
      readBtn.style.cssText = "background-color: lightred;"
    } else {
      book.haveRead = true
      readBtn.textContent = "Read"
      readBtn.style.cssText = "background-color: lightgreen;"
    }
    setData()
  }
}

// applies the createBookItem function to all books in myLibrarys
function renderBooks(){
  myLibrary.map(function (book, index){
    createBookItem(book, index)
  })
}

// gets input from user and creates new book
function  getInput(){
const title = document.getElementById('title').value
const author = document.getElementById('author').value
const pages = document.getElementById('pages').value
const isRead = document.getElementById('isRead').checked
return new Book(title, author, pages, isRead)
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

// Sets Form back to 0
function resetForm(){
  document.getElementById("formData").reset()
  modal.style.display = "none";
  overlay.style.display = "none";
}

// After pressing Submit, adds the book
submit.onclick = function(){
  if(title.value === "" || author.value === "" || pages.value === ""){
    return false
  } else {
  addBookToLibrary()
  resetForm()
}}


// Local storage settings
function setData(){
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

// Local storage when page is refreshed
function restore() {
  if(!localStorage.myLibrary) {
    renderBooks();
  }else {
      let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
      objects = JSON.parse(objects);
      myLibrary = objects;
      renderBooks();
  }
}

restore();

// localStorage.clear(); will reset localStorage to default