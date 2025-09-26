import { jwtDecode } from 'jwt-decode';
import { TokenDecoderService } from '../../core/application/TokenDecoderService';

export class JWTDecoderTokenDecoderService implements TokenDecoderService {
  async decodeJWT(token: string): Promise<Record<string, any>> {
    return jwtDecode(token);
  }
}
