import { BusDispacher } from '~/modules/shared/core/application/BusDispacher';
import { UseCase } from '~/modules/shared/core/application/UseCase';

export class OpenProductModalInEditMode implements UseCase<Input, void> {
  constructor(private readonly busDispatcher: BusDispacher) {}

  execute({ id }: Input): void {
    this.busDispatcher.dispatch('product-modal-opened', { id });
  }
}

type Input = { id: string };
