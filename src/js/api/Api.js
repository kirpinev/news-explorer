export default class Api {
  constructor(options) {
    this.url = options.url;
  }

  saveDependencies(dependencies) {
    this._dependencies = dependencies;
  }
}
