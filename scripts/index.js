const editBtn = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editExitBtn = editModal.querySelector(".modal__exit-btn");
const addBtn = document.querySelector(".profile__add-btn");
const addModal = document.querySelector("#new-post-modal");
const addExitBtn = addModal.querySelector(".modal__exit-btn");

editBtn.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
});
editExitBtn.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

addBtn.addEventListener("click", function () {
  addModal.classList.add("modal_is-opened");
});
addExitBtn.addEventListener("click", function () {
  addModal.classList.remove("modal_is-opened");
});
