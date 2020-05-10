const POPUP_AUTH_OPTIONS = {
  container: document.querySelector('.popup_type_auth'),
  elements: {
    form: document.querySelector('.form_auth'),
    buttonAuthError: document.querySelector('.error_type_auth'),
    allButtonErrors: document.querySelector('.form_auth').querySelectorAll('.error'),
    allFormInputs: document.querySelector('.form_auth').querySelectorAll('.form__input'),
    popupCloseButton:  document.querySelector('.popup__close_auth'),
    subButtonLink: 'form__sub-button-link',
    subButtonLinkReg: document.querySelector('.form__sub-button-link_reg'),
    email: '.form__input_email',
    password: '.form__input_password'
  },
  props: {
    authPopupOpened: 'popup_is-opened'
  }
}

export default POPUP_AUTH_OPTIONS;
