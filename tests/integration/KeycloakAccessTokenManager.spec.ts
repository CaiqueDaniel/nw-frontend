import Keycloak from 'keycloak-js';
import { UnableToGetAccessTokenError } from '~/modules/shared/application/UnableToGetAccessTokenError';
import { KeycloakAccessTokenManager } from '~/modules/shared/infra/services/KeycloakAccessTokenManager';

describe('KeycloakAccessTokenManager integration tests', () => {
  let keycloakClient: KeycloakStub;
  let sut: KeycloakAccessTokenManager;

  beforeAll(() => {
    keycloakClient = new KeycloakStub();
    sut = new KeycloakAccessTokenManager(keycloakClient as unknown as Keycloak);
  });

  afterEach(() => {
    keycloakClient.updateToken();
  });

  it('should be able to privide a token', async () => {
    const result = await sut.getToken();
    expect(result).toBeDefined();
  });

  it('should not be able to get token given no token is available', async () => {
    keycloakClient.clearToken();
    const result = sut.getToken();

    await expect(result).rejects.toThrowError(UnableToGetAccessTokenError);
  });

  it('should be able to reset token expired token', async () => {
    const firstToken = await sut.getToken();

    await keycloakClient.onTokenExpired?.();

    const secondToken = await sut.getToken();

    expect(firstToken).not.toBe(secondToken);
  });

  it('should be able revoke access token', async () => {
    await sut.getToken();
    await sut.revokeToken();

    expect(keycloakClient.didLogout).toBeTruthy();
  });
});

//@ts-expect-error - interface not fully implemented
class KeycloakStub implements Keycloak {
  didLogout: boolean = false;
  token?: string | undefined;
  didInitialize: boolean = false;
  onTokenExpired?: () => Promise<void>;
  onAuthSuccess?: () => Promise<void>;

  async init(): Promise<boolean> {
    this.didInitialize = true;

    new Promise((resolve) =>
      setTimeout(() => {
        this.token = crypto.randomUUID();
        resolve(true);
      }, 1)
    ).then(() => this.onAuthSuccess?.());

    return true;
  }

  async updateToken(): Promise<boolean> {
    this.token = crypto.randomUUID();

    return true;
  }

  clearToken(): void {
    this.token = undefined;
  }

  async logout() {
    this.didLogout = true;
  }
}
