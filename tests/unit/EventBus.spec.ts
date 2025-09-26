import { EventBus } from '~/modules/shared/infra/services/EventBus';

describe('EventBus unit tests', () => {
  afterEach(() => {
    EventBus.getInstance().clear();
  });

  it('should be able to subscribe', () => {
    const sut = EventBus.getInstance();
    const testHandler = vitest.fn();

    const id = sut.subscribe('test', testHandler);
    sut.dispatch('test');

    expect(testHandler).toHaveBeenCalled();
    expect(id).toBeDefined();
  });

  it('should be able to unsubscribe', () => {
    const sut = EventBus.getInstance();
    const testHandler = vitest.fn();

    const id = sut.subscribe('test', testHandler);
    sut.unsubscribe(id);
    sut.dispatch('test');

    expect(testHandler).not.toHaveBeenCalled();
  });
});
