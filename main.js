const addButton = document.getElementById("add-book")
const modal = document.getElementById("addBookModal")
const overlay = document.getElementById("addOverlay")
const submit = document.getElementById("submitBtn")
const gridBooks = document.getElementById("grid-books")

haveRead = false
let bookId = 0
let myLibrary = []

function Book(title, author, pages, haveRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

let bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
let bookTwo = new Book('Game of Thrones', 'George R. R. Martin', '694 pages', 'not read yet')



myLibrary.push(bookOne)
myLibrary.push(bookTwo)

function addBookToLibrary(){
  const nextBook = getInput()
  myLibrary.push(nextBook)
  console.log(myLibrary) 
  showBook(nextBook)
  }

  // Creates the layout for one Book
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

    bookCard.setAttribute("id", 1);
    // bookCard.setAttribute("id", bookId);
    // if (this.parentNode.id === bookId){
    //   bookID += 1
    // }
    
    

    title.textContent = `${book.title}`
    author.textContent = `By: ${book.author}`
    pages.textContent = `number of pages: ${book.pages}`
    removeBtn.textContent = "Remove"


      if (haveRead === true){
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
      // console.log(this)
      console.log(this.parentNode)
      console.log(this.parentNode.id)
      // removeBtn.parentElement.remove();
      // myLibrary.splice(0,1); // Have to find a way to get the selected Book
      // console.log(myLibrary)
      }
  }
  showBook(bookOne)
  showBook(bookTwo)


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

