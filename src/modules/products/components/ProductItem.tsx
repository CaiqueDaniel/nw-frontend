import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { ProductListItemProps } from '../types/ProductListItemProps';
import { Menu } from '~/modules/shared/infra/features/Menu/Menu';
import { useLocalUserRolesCheckService } from '~/modules/shared/infra/hooks/useLocalUserRolesCheckService';
import { PermissionRoles } from '~/modules/shared/types/PermissionRoles';

export function ProductItem({
  name,
  description,
  imageCover,
  onClickEdit,
  onClickOpenProduct,
}: ProductListItemProps) {
  const { userRolesHasOneOf } = useLocalUserRolesCheckService();
  const onClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    onClickOpenProduct();
  };

  return (
    <Card sx={{ maxWidth: 345 }} title={name}>
      <CardActionArea>
        <Link
          href={''}
          onClick={onClick}
          sx={{ textDecoration: 'none' }}
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={imageCover}
            alt={name}
          />
        </Link>
      </CardActionArea>

      <Box display="grid" gridTemplateColumns="1fr auto" alignItems="center">
        <CardActionArea>
          <Link
            href={''}
            onClick={onClick}
            sx={{ textDecoration: 'none', color: 'unset' }}
            target="_blank"
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>

        {onClickEdit && userRolesHasOneOf(PermissionRoles.ADMIN) && (
          <Menu>
            <Menu.EditItem onClick={onClickEdit} />
          </Menu>
        )}
      </Box>
    </Card>
  );
}
