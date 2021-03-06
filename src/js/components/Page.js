export default class Page {
  fillBlocks() {
    this._fillMainPage();
    this._fillSavedPage();
  }

  _fillMainPage() {
    const { name } = this._dependencies;

    if (name === 'main') {
      const { header, storage, mainApi, articlesBlock, search, popupAuth, popupReg, popupSuccess } = this._dependencies;

      const userName = storage.getPropertyValue('userName');

      header.setHandlers();

      search.setHandlers();

      articlesBlock.setHandlers();

      popupAuth.setHandlers();

      popupReg.setHandlers();

      popupSuccess.setHandlers();

      if (userName) {
        header.setLoggedHeaderNavigation(userName);
      } else {
        mainApi
          .getUserData()
          .then(res => {
            if (res.status === '200') {
              storage.setPropertyValue('userName', res.data.name);

              header.setLoggedHeaderNavigation(storage.getPropertyValue('userName'));
            } else {
              header.setUnloggedHeaderNavigation();

              throw new Error(res.message);
            }
          })
          .catch(err => console.log(err.message));
      }
    }
  }

  _fillSavedPage() {
    const { name } = this._dependencies;

    if (name === 'saved') {
      const { header, storage, mainApi, notFound, details, articlesBlock, redirectTo } = this._dependencies;

      const userName = storage.getPropertyValue('userName');

      header.setHandlers();

      articlesBlock.setHandlers();

      if (userName) {
        header.setLoggedHeaderNavigation(userName);

        mainApi
          .getArticles()
          .then(res => {
            if (res.status === '200') {
              storage.setPropertyValue('articles', JSON.stringify(res.data));

              details.setDetails(storage.getPropertyValue('articles'));

              if (JSON.parse(storage.getPropertyValue('articles')).length === 0) {
                notFound.open();
              } else {
                articlesBlock.open();

                articlesBlock.renderArticles(storage.getPropertyValue('articles'));
              }
            } else {
              throw new Error(res.message);
            }
          })
          .catch(err => console.log(err.message));
      } else {
        mainApi
          .getUserData()
          .then(res => {
            if (res.status === '200') {
              storage.setPropertyValue('userName', res.data.name);

              header.setLoggedHeaderNavigation(storage.getPropertyValue('userName'));

              return mainApi.getArticles();
            } else {
              header.setUnloggedHeaderNavigation();

              redirectTo('../');

              throw new Error(res.message);
            }
          })
          .then(res => {
            if (res.status === '200') {
              storage.setPropertyValue('articles', res.articles);

              articlesBlock.open();

              articlesBlock.renderArticles(storage.getPropertyValue('articles'));
            }
          })
          .catch(err => console.log(err.message));
      }
    }
  }

  saveDependencies(dependencies) {
    this._dependencies = dependencies;
  }
}
