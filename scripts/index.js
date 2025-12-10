const editBtn = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editExitBtn = editModal.querySelector(".modal__exit-btn");
const editProfileForm = editModal.querySelector(".modal__form");
const editProfileNameInput = editModal.querySelector("#input-name");
const editProfileDescriptionInput =
  editModal.querySelector("#input-description");

const addBtn = document.querySelector(".profile__add-btn");
const addModal = document.querySelector("#new-post-modal");
const addExitBtn = addModal.querySelector(".modal__exit-btn");
const addFormElement = addModal.querySelector(".modal__form");
const addLinkInput = addModal.querySelector("#input-link");
const addCaptionInput = addModal.querySelector("#input-caption");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editModal);
});
editExitBtn.addEventListener("click", function () {
  closeModal(editModal);
});

addBtn.addEventListener("click", function () {
  openModal(addModal);
});
addExitBtn.addEventListener("click", function () {
  closeModal(addModal);
});
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editModal);
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  console.log(addLinkInput.value);
  console.log(addCaptionInput.value);
  closeModal(addModal);
}

addFormElement.addEventListener("submit", handleAddFormSubmit);
