import { MainLayout } from '~/modules/shared/infra/layouts/MainLayout';
import { CharacterActionBar } from '../features/CharacterActionBar/CharacterActionBar';
import { CharacterForm } from '../features/CharacterForm/CharacterForm';

export function CharactersHomePage() {
  return (
    <MainLayout>
      <CharacterActionBar />
      <CharacterForm />
    </MainLayout>
  );
}
