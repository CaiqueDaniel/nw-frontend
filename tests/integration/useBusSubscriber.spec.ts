import { renderHook, waitFor } from '@testing-library/react';
import { useBusSubscriber } from '~/modules/shared/infra/hooks/useBusSubscriber';
import { EventBus } from '~/modules/shared/infra/services/EventBus';

describe('useBusSubscriber unit test', () => {
  let bus: EventBus;

  beforeAll(() => {
    bus = EventBus.getInstance();
  });

  it('should be able to subscribe a listener', async () => {
    let eventTriggered = false;

    renderHook(() =>
      useBusSubscriber({
        bus,
        eventName: 'event-dispatched',
        handler: () => (eventTriggered = true),
      })
    );

    await waitFor(() => {
      bus.dispatch('event-dispatched');
      expect(eventTriggered).toBeTruthy();
    });
  });

  it('should be able to unsubscribe a listener', async () => {
    let eventTriggered = false;

    const { unmount } = renderHook(() =>
      useBusSubscriber({
        bus,
        eventName: 'event-dispatched',
        handler: () => (eventTriggered = true),
      })
    );

    unmount();

    await waitFor(() => {
      bus.dispatch('event-dispatched');
      expect(eventTriggered).toBeFalsy();
    });
  });
});
