import { Box, Button } from '@mui/material';
import { useProductActionBarPresenter } from './useProductActionBarPresenter';
import { Add } from '@mui/icons-material';
import { useLocalUserRolesCheckService } from '~/modules/shared/infra/hooks/useLocalUserRolesCheckService';
import { PermissionRoles } from '~/modules/shared/types/PermissionRoles';

export function ProductActionBar() {
  const { userRolesHasOneOf } = useLocalUserRolesCheckService();
  const { onClickBtnAdd } = useProductActionBarPresenter();

  if (!userRolesHasOneOf(PermissionRoles.ADMIN)) return <></>;

  return (
    <Box mb={3} display="flex" justifyContent="flex-end" width="100%">
      <Button
        color="primary"
        variant="contained"
        onClick={onClickBtnAdd}
        sx={{ borderRadius: 50 }}
        startIcon={<Add />}
      >
        Adicionar
      </Button>
    </Box>
  );
}
