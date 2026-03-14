const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-btn",
  inactiveButtonClass: "modal__save-btn_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (formEl, inputEl, errorMessage, config) => {
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  errorElement.textContent = errorMessage;
  inputEl.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formEl, inputEl, config) => {
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  errorElement.textContent = "";
  inputEl.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
};

const checkInputValidity = (formEl, inputEl, config) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  });
};
const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const resetValidation = (formEl, inputList, config) => {
  inputList.forEach((inputEl) => {
    hideInputError(formEl, inputEl, config);
  });
};
const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonElement = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement, config);

      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formEl) => {
    setEventListeners(formEl, config);
  });
};

enableValidation(settings);
