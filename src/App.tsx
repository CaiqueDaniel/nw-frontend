import { Provider } from 'react-redux';
import { Router } from './Router';
import { store } from './config/rtkquery/store';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
