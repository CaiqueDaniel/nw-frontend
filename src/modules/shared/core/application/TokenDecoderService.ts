export interface TokenDecoderService {
  decodeJWT(token: string): Promise<Record<string, any>>;
}
