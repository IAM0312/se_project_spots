const editBtn = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editExitBtn = editModal.querySelector(".modal__exit-btn");
const editProfileForm = editModal.querySelector(".modal__form");
const editProfileNameInput = editModal.querySelector("#input-name");
const editProfileDescriptionNameInput =
  editModal.querySelector("#input-description");

const addBtn = document.querySelector(".profile__add-btn");
const addModal = document.querySelector("#new-post-modal");
const addExitBtn = addModal.querySelector(".modal__exit-btn");
const addFormElement = addModal.querySelector(".modal__form");
const addNameInput = addModal.querySelector("#input-link");
const addLinkInput = addModal.querySelector("#input-caption");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionNameInput.value = profileDescriptionEl.textContent;
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
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionNameInput.value;
  editModal.classList.remove("modal_is-opened");
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  console.log(addNameInput.value);
  console.log(addLinkInput.value);
  addModal.classList.remove("modal_is-opened");
}

addFormElement.addEventListener("submit", handleAddFormSubmit);
