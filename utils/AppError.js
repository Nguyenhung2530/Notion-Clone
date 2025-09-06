class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOpreational = true; // phan biet error do dev va do business

    Error.captureStackTrace(this, this.constructor); // giu nguyen stack trace cho debug
  }
}

module.exports = AppError;
