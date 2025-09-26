import Keycloak from 'keycloak-js';

import { AccessTokenManager } from '../../application/AccessTokenManager';
import { UnableToGetAccessTokenError } from '../../application/UnableToGetAccessTokenError';

export class KeycloakAccessTokenManager implements AccessTokenManager {
  private tokenProvided = false;

  constructor(private readonly keycloakClient: Keycloak) {}

  async getToken(): Promise<string> {
    if (!this.keycloakClient.didInitialize) await this.initKeycloak();

    const token = await this.getAccessToken();
    if (!token) throw new UnableToGetAccessTokenError();

    return token;
  }

  async revokeToken(): Promise<void> {
    await this.keycloakClient.logout();
  }

  private async initKeycloak() {
    this.keycloakClient.onAuthSuccess = () => {
      this.tokenProvided = true;
    };

    this.keycloakClient.onTokenExpired = async () => {
      await this.keycloakClient.updateToken();
    };

    await this.keycloakClient.init({
      onLoad: 'login-required',
    });
  }

  private async getAccessToken() {
    while (!this.tokenProvided) {
      await new Promise((resolve) => setInterval(() => resolve(true), 20));
    }

    return this.keycloakClient.token;
  }
}
