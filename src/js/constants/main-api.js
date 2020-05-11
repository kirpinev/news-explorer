const MAIN_API_OPTIONS = {
  url: `https://api.nexp.site`,
  headers: {
    'Content-Type': 'application/json'
  },
  roots: {
    signup: `/signup`,
    signin: `/signin`,
    logout: `/logout`,
    userData: `/users/me`,
    articles: `/articles`
  }
};

export default MAIN_API_OPTIONS;
