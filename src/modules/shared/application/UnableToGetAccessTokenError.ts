export class UnableToGetAccessTokenError extends Error {
  constructor() {
    super('Unable to get access token');
  }
}
