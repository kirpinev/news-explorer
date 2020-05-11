const ARTICLE_CARD_OPTIONS = {
  container: {
    article: document.querySelector('.articles')
  },
  elements: {
    article: '.article',
    actionBlock: '.article__action-description',
    notAddedIcon: 'article__action-button_not-added-article',
    addedIcon: 'article__action-button_added-article',
    deleteIcon: 'article__action-button_delete-article',
    mainArticle: 'articles_main'
  },
  props: {
    actionBlockOpened: 'article__action-description_is-opened'
  },
  description: {
    searchedArticlesDescription: 'Войдите, чтобы сохранять статьи',
    savedArticlesDescription: 'Убрать из сохранённых'
  }
};

export default ARTICLE_CARD_OPTIONS;
