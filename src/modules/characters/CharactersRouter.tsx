import { Outlet } from 'react-router-dom';
import { CharactersProviders } from './CharactersProviders';
import { CharactersFormPage } from './pages/CharactersFormPage';
import { CharactersHomePage } from './pages/CharactersHomePage';

export const CharactersRouter = [
  {
    path: '',
    element: (
      <CharactersProviders>
        <Outlet />
      </CharactersProviders>
    ),
    children: [
      {
        path: '',
        element: <CharactersHomePage />,
      },
      {
        path: 'personagens/novo',
        element: <CharactersFormPage />,
      },
    ],
  },
];
