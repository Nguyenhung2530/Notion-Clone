class ApiReponse {
  constructor(success, data = null, message = null) {
    this.success = success;
    this.data = data;
    this.message = message;
  }
}

module.exports = ApiReponse;
