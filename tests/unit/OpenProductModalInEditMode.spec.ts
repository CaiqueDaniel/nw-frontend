import { OpenProductModalInEditMode } from '~/modules/products/application/OpenProductModalInEditMode';
import { BusDispacher } from '~/modules/shared/application/BusDispacher';

describe('OpenProductModalInEditMode use case unit tests', () => {
  let sut: OpenProductModalInEditMode;
  let busDispatcher: BusDispacher;

  beforeAll(() => {
    busDispatcher = { dispatch: vitest.fn() };
    sut = new OpenProductModalInEditMode(busDispatcher);
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("should be able to dispatch events to open product's form modal with product id", () => {
    const id = crypto.randomUUID();
    sut.execute({ id });
    expect(busDispatcher.dispatch).toHaveBeenCalledWith(
      'product-modal-opened',
      { id }
    );
  });
});
