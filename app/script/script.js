const hambergerBtn = document.getElementById("hambergerButton");
const hambergerMenu = document.getElementById("hambergerMenu");
hambergerBtn.addEventListener("click", handleHamberger);

function handleHamberger() {
  hambergerBtn.classList.toggle("active");
  if (hambergerBtn.classList.contains("active")) {
    hambergerMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    hambergerMenu.classList.remove("active");
    document.body.style.overflow = "scroll";
  }
}

const bookmark = document.querySelector(".bookmark-container");
let bookmarkText = document.getElementById("bookmarkText");
bookmark.addEventListener("click", handleBookmark);

function handleBookmark() {
  bookmark.classList.toggle("active");
  if (bookmark.classList.contains("active")) {
    bookmarkText.innerText = "Bookmarked";
  } else {
    bookmarkText.innerText = "Bookmark";
  }
}

const projectBtn = document.getElementById("projectBtn");
const projectMenu = document.querySelector(".project-selector");
const projectCancelBtn = document.getElementById("projectCancelBtn");
projectBtn.addEventListener("click", handleProject);
projectCancelBtn.addEventListener("click", handleProjectCancel);

function handleProject() {
  projectMenu.classList.add("active");
  document.body.style.overflow = "hidden";
}

function handleProjectCancel() {
  projectMenu.classList.remove("active");
  document.body.style.overflow = "scroll";
}

const projectSelector = document.querySelectorAll(".SelectedCard");
projectSelector.forEach((element) => {
  element.addEventListener("click", handleProjectSelector);
});

function handleProjectSelector(event) {
  projectSelector.forEach((card) => {
    card.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  event.currentTarget.querySelector(".text-box .title input").checked = true;
  event.currentTarget
    .querySelector(".input-box button")
    .addEventListener("click", handleContinue);
}
const thanksMsg = document.getElementById("thanksMsg");
function handleContinue() {
  projectMenu.classList.remove("active");
  thanksMsg.classList.add("active");
  if (thanksMsg.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
}
const thanksGotIt = document.getElementById("thanksGotIt");

thanksGotIt.addEventListener("click", () => {
  thanksMsg.classList.remove("active");
  document.body.style.overflow = "scroll";
});
