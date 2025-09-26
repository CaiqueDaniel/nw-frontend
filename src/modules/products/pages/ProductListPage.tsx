import { ProductList } from '../features/ProductList/ProductList';
import { MainLayout } from '~/modules/shared/infra/layouts/MainLayout';
import { ProductItem } from '../components/ProductItem';
import { ProductForm } from '../features/ProductForm/ProductForm';
import { Modal } from '~/modules/shared/infra/features/Modal/Modal';
import { ProductActionBar } from '../features/ProductActionBar/ProductActionBar';
import { ProductTokenBox } from '../features/ProductTokenBox/ProductTokenBox';

export function ProductListPage() {
  return (
    <MainLayout>
      <ProductActionBar />
      <ProductList ItemComponent={ProductItem} />

      <Modal event="product-modal-opened">
        {({ onClose, message }) => (
          <ProductForm onCancel={onClose} productId={message?.id} />
        )}
      </Modal>

      <Modal event="new-product-token-created">
        {({ onClose, message }) =>
          message?.token && (
            <ProductTokenBox onClose={onClose} token={message?.token} />
          )
        }
      </Modal>
    </MainLayout>
  );
}
