import { FormLayout } from '~/modules/shared/infra/layouts/FormLayout';
import { CharacterForm } from '../features/CharacterForm/CharacterForm';

export function CharactersFormPage() {
  return (
    <FormLayout>
      <CharacterForm />
    </FormLayout>
  );
}
