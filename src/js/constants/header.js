const HEADER_OPTIONS = {
  container: document.querySelector('.header'),
  elements: {
    navLinks: document.querySelector('.header__nav-links'),
    popupNavLinks: document.querySelector('.popup_type_nav-links'),
    savedArticlesLink: document.querySelector('.header__nav-item_articles'),
    buttonAuth: document.querySelector('.header__nav-item_auth'),
    buttonLogin: document.querySelector('.header__nav-item_login'),
    buttonLoginText: document.querySelector('.header__button_login'),
    buttonItemAuth: 'header__button_type_auth',
    headerMain: 'header_main',
    headerSaved: 'header_saved',
    headerToggle: document.querySelector('.header__toggle'),
    header__popup: 'header__popup'
  },
  props: {
    navItemVisible: 'header__nav-item_visible',
    toggleLightOpened: 'header__toggle_light_opened',
    toggleDarkOpened: 'header__toggle_dark_opened',
    navLinksOpened: 'header__nav-links_opened',
    headerPopupOpened: 'popup_is-opened'
  }
};

export default HEADER_OPTIONS;
