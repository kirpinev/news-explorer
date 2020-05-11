export default class Validation {
  constructor(errors) {
    this.errors = errors;
  }

  validateReg(event) {
    const { regEmail, password, name } = this._getFormElements(event);

    if (!regEmail.validity.valid || !password.validity.valid || !name.validity.valid) {
      this._checkEmptyInput(event, password, name);
      this._checkRangePassword(event, password);
      this._checkRangeName(event, name);
      this._checkCorrectInput(event, regEmail, password, name);
      this._checkEmail(event, regEmail);
      this._disableButton(event);
    } else {
      this._removeErrors(event);
      this._activateButton(event);
    }
  }

  validateAuth(event) {
    const { authEmail, authPassword } = this._getFormElements(event);

    if (!authEmail.validity.valid || !authPassword.validity.valid) {
      this._checkEmptyInput(event, authPassword);
      this._checkRangePassword(event, authPassword);
      this._checkCorrectInput(event, authEmail, authPassword);
      this._checkEmail(event, authEmail);
      this._disableButton(event);
    } else {
      this._removeErrors(event);
      this._activateButton(event);
    }
  }

  validateSearch(event) {
    const { search } = this._getFormElements(event);

    if (!search.validity.valid) {
      this._checkEmptyInput(event, search);
      this._checkRangeName(event, search);
      this._disableButton(event);
    } else {
      this._removeErrors(event);
      this._activateButton(event);
    }
  }

  _checkEmptyInput(event, ...inputs) {
    if (event.target.value.length === 0) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(`#${input.name}`).textContent = this.errors.emptyInput;
        }
      });
    }
  }

  _checkRangePassword(event, ...inputs) {
    if ((event.target.value.length >= 1 && event.target.value.length < 8) || event.target.value.length > 30) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(`#${input.name}`).textContent = this.errors.outOfRangePassword;
        }
      });
    }
  }

  _checkRangeName(event, ...inputs) {
    if (event.target.value.length === 1 || event.target.value.length > 30) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(`#${input.name}`).textContent = this.errors.outOfRangeName;
        }
      });
    }
  }

  _checkCorrectInput(event, ...inputs) {
    if (event.target.validity.valid) {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(`#${input.name}`).textContent = this.errors.correctInput;
        }
      });
    }
  }

  _checkEmail(event, ...inputs) {
    if (!event.target.validity.patternMismatch) {
      this._checkEmptyInput(event, ...inputs);
    } else {
      inputs.forEach(input => {
        if (event.target.name === input.name) {
          document.querySelector(`#${input.name}`).textContent = this.errors.invalidEmail;
        }
      });
    }
  }

  _removeErrors(event) {
    event.currentTarget.querySelectorAll('.error').forEach(error => {
      error.textContent = '';
    });
  }

  _disableButton(event) {
    event.currentTarget.querySelector('.form__button').setAttribute('disabled', true);
  }

  _activateButton(event) {
    event.currentTarget.querySelector('.form__button').removeAttribute('disabled');
  }

  _getFormElements(event) {
    return event.currentTarget.querySelector('.form').elements;
  }
}
