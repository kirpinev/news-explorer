import BaseComponent from './BaseComponent';

export default class Preloader extends BaseComponent {
  constructor(options) {
    super(options);
  }

  open() {
    const { preloaderOpened } = this.props;

    this.container.classList.add(preloaderOpened);
  }

  close() {
    const { preloaderOpened } = this.props;

    this.container.classList.remove(preloaderOpened);
  }
}
