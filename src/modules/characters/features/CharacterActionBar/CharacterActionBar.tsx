import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useCharacterActionBarContext } from './CharacterActionBarContext';

export function CharacterActionBar() {
  const { navigator } = useCharacterActionBarContext();

  return (
    <Box mb={3} display="flex" justifyContent="flex-end" width="100%">
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigator.navigateTo('/products/new')}
        sx={{ borderRadius: 50 }}
        startIcon={<Add />}
      >
        Adicionar
      </Button>
    </Box>
  );
}
