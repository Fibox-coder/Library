const addButton = document.getElementById("add-book")
const modal = document.getElementById("addBookModal")
const overlay = document.getElementById("addOverlay")


let myLibrary = []

function Book(title, author, pages, haveRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}



function addBookToLibrary(){

}

let bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
console.log(bookOne)

// let bookTwo = new Book(prompt('Title'), prompt('Author'), prompt('pages'), prompt('have you read it?'))
// console.log(bookTwo)

// addButton.addEventListener('click', function(){
//   console.log('test')
// })

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
