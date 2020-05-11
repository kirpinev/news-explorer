const POPUP_REG_OPTIONS = {
  container: document.querySelector('.popup_type_reg'),
  elements: {
    form: document.querySelector('.form_reg'),
    buttonRegError: document.querySelector('.error_type_reg'),
    allButtonErrors: document.querySelector('.form_reg').querySelectorAll('.error'),
    allFormInputs: document.querySelector('.form_reg').querySelectorAll('.form__input'),
    popupCloseButton: document.querySelector('.popup__close_reg'),
    subButtonLink: 'form__sub-button-link',
    subButtonLinkAuth: document.querySelector('.form__sub-button-link_auth'),
    email: '.form__input_email',
    password: '.form__input_password',
    name: '.form__input_name'
  },
  props: {
    regPopupOpened: 'popup_is-opened'
  }
};

export default POPUP_REG_OPTIONS;
