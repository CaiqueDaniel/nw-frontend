import { MainLayout } from '~/modules/shared/infra/layouts/MainLayout';
import { CharacterActionBar } from '../features/CharacterActionBar/CharacterActionBar';

export function CharactersHomePage() {
  return (
    <MainLayout>
      <CharacterActionBar />
    </MainLayout>
  );
}
