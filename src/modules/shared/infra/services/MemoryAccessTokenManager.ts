import { AccessTokenManager } from "../../application/AccessTokenManager";

export class MemoryAccessTokenManager implements AccessTokenManager {
    async getToken(): Promise<string> {
        return 'token'
    }

    async revokeToken(): Promise<void> { }
}