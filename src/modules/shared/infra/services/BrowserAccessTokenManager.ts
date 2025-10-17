import { AccessTokenManager } from "../../application/AccessTokenManager";

export class BrowserAccessTokenManager implements AccessTokenManager {
    async getToken(): Promise<string> {
        const response = await fetch('http://localhost:5000/api/users/login', {
            body: JSON.stringify({ email: 'thanatos@nw.com', password: '68897518' }),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        const { accessToken } = (await response.json()) as { accessToken: string };
        return accessToken;
    }

    async revokeToken(): Promise<void> {
        return
    }
}