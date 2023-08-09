export class MethodNotAllowedError extends Error {
  readonly status: number;
  readonly message: string;
  readonly name: string;
  constructor(message?: string) {
    super('MethodNotAllowedError');
    this.name = 'MethodNotAllowedError';
    this.message = message ?? 'This method is not allowed';
    this.status = 405;
  }
}

export class NotFoundError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(message?: string) {
    super('API');
    this.name = 'NotFoundError';
    this.status = 404;
    this.message = message ?? 'The requested entity could not be found';
  }
}

export class PermissionError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(message?: string) {
    super('PermissionError');

    this.name = 'PermissionError';
    this.status = 403;
    this.message = message ?? 'You do not have the permissions to perform this action';
  }
}

export class BadRequestError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(message?: string) {
    super('BadRequestError');

    this.name = 'BadRequestError';
    this.status = 400;
    this.message = message ?? 'The URI is incorrect';
  }
}

export class AppError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(status: number, message: string) {
    super('AppError');
    this.status = status;
    this.name = 'AppError';
    this.message = message;
  }
}
