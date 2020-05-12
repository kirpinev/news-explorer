import BaseComponent from './BaseComponent';

export default class Search extends BaseComponent {
  constructor(options) {
    super(options);
  }

  submit(event) {
    event.preventDefault();

    const { articlesBlock, notFound, preloader, newsApi, storage } = this._dependencies;

    const { searchInput } = this.elements;

    const keyword = this._getInputFormValues(event, searchInput);

    this.disableFormInputs();

    this.disableButtons();

    articlesBlock.close();

    articlesBlock.clearArticles();

    preloader.open();

    notFound.close();

    newsApi
      .getNews(keyword)
      .then(res => {
        if (res.status === 'ok' && res.totalResults > 0) {
          storage.setPropertyValue('keyword', keyword);

          storage.setPropertyValue('articles', JSON.stringify(res.articles));

          articlesBlock.open();

          articlesBlock.renderArticles(storage.getPropertyValue('articles'));
        } else if (res.status === 'ok' && res.totalResults === 0) {
          notFound.open();
        } else if (res.status === 'error') {
          throw new Error(res.message);
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        preloader.close();

        this.activateFormInputs();

        this.activateButtons();
      });
  }

  setHandlers() {
    const { validation } = this._dependencies;

    this._setHandlers([
      { element: this.container, event: 'input', handler: validation.validateSearch.bind(validation) },
      { element: this.container, event: 'submit', handler: this.submit.bind(this) }
    ]);
  }
}
