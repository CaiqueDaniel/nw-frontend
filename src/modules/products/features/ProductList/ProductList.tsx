import { Box } from '@mui/material';
import { useProductListPresenter } from './useProductListPresenter';
import { ComponentType } from 'react';
import { ProductListItemProps } from '../../types/ProductListItemProps';

export function ProductList({ ItemComponent }: Props) {
  const { rows, onClickEditBtn, onClickOpenProduct } =
    useProductListPresenter();

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      width="100%"
      gap={2}
    >
      {rows.map((item) => (
        <ItemComponent
          key={item.id}
          onClickEdit={() => onClickEditBtn(item.id)}
          onClickOpenProduct={() => onClickOpenProduct(item.id)}
          {...item}
        />
      ))}
    </Box>
  );
}

type Props = {
  ItemComponent: ComponentType<ProductListItemProps>;
};
