export type ProductListItemProps = {
  name: string;
  description: string;
  imageCover: string;
  onClickEdit?: () => void;
  onClickOpenProduct: () => void;
};
