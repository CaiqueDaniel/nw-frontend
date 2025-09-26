import { LocalUserRolesCheckService } from '~/modules/shared/infra/services/LocalUserRolesCheckService';

describe('LocalUserRolesCheckService unit tests', () => {
  let sut: LocalUserRolesCheckService;

  beforeAll(() => {
    sut = new LocalUserRolesCheckService(['admin', 'editor']);
  });

  it('should be able to allow given user have role', () => {
    const result = sut.userRolesHasOneOf('admin');
    expect(result).toBe(true);
  });

  it('should be able to allow given user have one of those roles', () => {
    const result = sut.userRolesHasOneOf('editor', 'teste');
    expect(result).toBe(true);
  });

  it('should be able to not allow given user do not have role', () => {
    const result = sut.userRolesHasOneOf('teste');
    expect(result).toBe(false);
  });
});
