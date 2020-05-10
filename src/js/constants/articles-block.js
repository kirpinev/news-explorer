const ARTICLES_BLOCK_OPTIONS = {
  container: document.querySelector('.articles'),
  elements: {
    list: document.querySelector('.article-list'),
    showMoreButton: document.querySelector('.articles__show-more')
  },
  props: {
    articlesOpened: 'articles_is-opened'
  }

};

export default ARTICLES_BLOCK_OPTIONS;
