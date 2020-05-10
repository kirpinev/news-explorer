const POPUP_SUCCESS_OPTIONS = {
  container: document.querySelector('.popup_type_success'),
  elements: {
    successAuthLink: document.querySelector('.success__auth-link'),
    popupCloseButton: document.querySelector('.popup__close_success')
  },
  props: {
    successPopupOpened: 'popup_is-opened'
  }
};

export default POPUP_SUCCESS_OPTIONS;
