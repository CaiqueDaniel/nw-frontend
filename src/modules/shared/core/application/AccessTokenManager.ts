export interface AccessTokenManager {
  getToken(): Promise<string>;
  revokeToken(): Promise<void>;
}
