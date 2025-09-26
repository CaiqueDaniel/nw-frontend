import { BrowserLocalStorageService } from '../../src/modules/shared/infra/services/BrowserLocalStorageService';

describe('BrowserLocalStorageService unit tests', () => {
  let sut: BrowserLocalStorageService<string>;

  beforeAll(() => {
    sut = new BrowserLocalStorageService('storage name');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be able to get data from storage', () => {
    sut.set('test');

    expect(sut.get()).toBe('test');
  });

  it('should not be able to get data from storage that is empty', () => {
    expect(sut.get()).toBeUndefined();
  });

  it('should be able to clear storage', () => {
    sut.set('test');

    expect(sut.get()).toBe('test');

    sut.clear();

    expect(sut.get()).toBeUndefined();
  });
});
