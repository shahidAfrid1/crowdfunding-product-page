const hambergerBtn = document.getElementById('hambergerButton')
const hambergerMenu = document.getElementById('hambergerMenu')

hambergerBtn.addEventListener('click', handleHamberger)

function handleHamberger(){
    hambergerBtn.classList.toggle("active")
    if(hambergerBtn.classList.contains("active")){
        hambergerMenu.classList.add("active")
    }
    else{
        hambergerMenu.classList.remove("active")
    }
}

const bookmark = document.querySelector('.bookmark-container')
let bookmarkText = document.getElementById("bookmarkText")
bookmark.addEventListener('click', ()=> {
    bookmark.classList.toggle("active")
    if(bookmark.classList.contains("active")){
        bookmarkText.innerText = "Bookmarked"
    }
    else{
        bookmarkText.innerText = "Bookmark"
    }
})

