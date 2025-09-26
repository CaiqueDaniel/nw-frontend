import { TokenDecoderService } from "../../application/TokenDecoderService";

export class MemoryJWTDecoderTokenService implements TokenDecoderService {
    decodeJWT(): Promise<Record<string, any>> {
        return Promise.resolve({ sub: 'user-id' });
    }
}