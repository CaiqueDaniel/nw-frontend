import { Box, IconButton } from '@mui/material';
import { useNavbarPresenter } from './useNavbarPresenter';
import { Logout } from '@mui/icons-material';

export function Navbar() {
  const { onClickBtnLogout } = useNavbarPresenter();

  return (
    <Box width="100%" height="40px" py={2}>
      <Box width="100%" display="flex" justifyContent="end">
        <IconButton onClick={onClickBtnLogout}>
          <Logout />
        </IconButton>
      </Box>
    </Box>
  );
}
