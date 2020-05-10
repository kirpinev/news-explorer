import './index.css';

import Storage from '../../js/components/Storage';

import MainApi from '../../js/api/MainApi';
import MAIN_API_OPTIONS from '../../js/constants/main-api';

import NewsApi from '../../js/api/NewsApi';
import NEWS_API_OPTIONS from '../../js/constants/news-api';

import Page from '../../js/components/Page';

import Validation from '../../js/components/Validation';
import ERRORS from '../../js/constants/errors';

import Header from '../../js/components/Header';
import HEADER_OPTIONS from '../../js/constants/header';

import Search from '../../js/components/Search';
import SEARCH_OPTIONS from '../../js/constants/Search';

import NotFound from '../../js/components/NotFound';
import NOT_FOUND_OPTIONS from '../../js/constants/not-found';

import Preloader from '../../js/components/Preloader';
import PRELOADER_OPTIONS from '../../js/constants/preloader';

import ArticlesBlock from '../../js/components/ArticlesBlock';
import ARTICLES_BLOCK_OPTIONS from '../../js/constants/articles-block';

import ArticleCard from '../../js/components/ArticleCard';
import ARTICLE_CARD_OPTIONS from '../../js/constants/article-card';

import PopupReg from '../../js/components/PopupReg';
import POPUP_REG_OPTIONS from '../../js/constants/popup-reg';

import PopupAuth from '../../js/components/PopupAuth';
import POPUP_AUTH_OPTIONS from '../../js/constants/popup-auth';

import PopupSuccess from '../../js/components/PopupSuccess';
import POPUP_SUCCESS_OPTIONS from '../../js/constants/popup-success';

import redirectTo from '../../js/utils/redirect';
import checkImageUrl from '../../js/utils/images';
import deleteListTags from '../../js/utils/list-tags';
import dates from '../../js/utils/dates';
import MONTHS from '../../js/constants/months';
import articleProps from '../../js/utils/article-props';

const storage = new Storage(sessionStorage);

const mainApi = new MainApi(MAIN_API_OPTIONS);

const newsApi = new NewsApi(NEWS_API_OPTIONS);

const page = new Page();

const validation = new Validation(ERRORS.ru);

const header = new Header(HEADER_OPTIONS);

const search = new Search(SEARCH_OPTIONS);

const notFound = new NotFound(NOT_FOUND_OPTIONS);

const preloader = new Preloader(PRELOADER_OPTIONS);

const articlesBlock = new ArticlesBlock(ARTICLES_BLOCK_OPTIONS);

const articleCard = new ArticleCard(ARTICLE_CARD_OPTIONS);

const popupReg = new PopupReg(POPUP_REG_OPTIONS);

const popupAuth = new PopupAuth(POPUP_AUTH_OPTIONS);

const popupSuccess = new PopupSuccess(POPUP_SUCCESS_OPTIONS);

newsApi.saveDependencies({ dates });

page.saveDependencies({
  name: 'main',
  header,
  redirectTo,
  articlesBlock,
  notFound,
  mainApi,
  storage,
  search,
  popupAuth,
  popupReg,
  popupSuccess
});

header.saveDependencies({ popupAuth, mainApi, redirectTo, storage });

search.saveDependencies({ articlesBlock, notFound, preloader, newsApi, storage, validation });

articleCard.saveDependencies({ checkImageUrl, dates, deleteListTags, MONTHS, articleProps, storage, mainApi });

articlesBlock.saveDependencies({ storage, articleCard });

popupReg.saveDependencies({ validation, popupAuth, mainApi, popupSuccess });

popupAuth.saveDependencies({ validation, popupReg, mainApi, header, storage });

popupSuccess.saveDependencies({ popupAuth });

page.fillBlocks();
