import { PropsWithChildren, useMemo } from 'react';
import { ListProducts } from './application/ListProducts';
import { ProductListContext } from './features/ProductList/ProductListContext';
import { SaveProduct } from './application/SaveProduct';
import { ProductFormContext } from './features/ProductForm/ProductFormContext';
import { EventBus } from '../shared/infra/services/EventBus';
import { ModalContext } from '../shared/infra/features/Modal/ModalContext';
import { ProductActionBarContext } from './features/ProductActionBar/ProductActionBarContext';
import { OpenModal } from '../shared/core/application/OpenModal';
import { OpenProductModalInEditMode } from './application/OpenProductModalInEditMode';
import { GetProduct } from './application/GetProduct';
import { ProductTokenBoxContext } from './features/ProductTokenBox/ProductTokenBoxContext';
import { BrowserNativeClipboardService } from '../shared/infra/services/BrowserNativeClipboardService';
import { useRTKProductGateway } from './gateways/useRTKProductGateway';
import { MemoryProductRepository } from './repositories/MemoryProductRepository';
import { FormDataPayloadMapper } from '../shared/infra/mappers/FormDataPayloadMapper';
import { useRTKProductCheckoutGateway } from './gateways/useRTKProductCheckoutGateway';
import { GetProductUrl } from './application/GetProductUrl';

export function ProductProviders({ children }: PropsWithChildren) {
  const isDevEnv = import.meta.env.VITE_ENV === 'development';
  const bus = EventBus.getInstance();
  const productCheckoutService = useRTKProductCheckoutGateway();
  const repository = isDevEnv
    ? useMemo(() => new MemoryProductRepository(), [])
    : useRTKProductGateway(new FormDataPayloadMapper());
  const openModal = useMemo(() => new OpenModal(bus), []);
  const saveProduct = useMemo(() => new SaveProduct(repository, bus), []);
  const listProducts = useMemo(() => new ListProducts(repository), []);
  const getProduct = useMemo(() => new GetProduct(repository), []);
  const getProductUrl = useMemo(
    () => new GetProductUrl(repository, productCheckoutService),
    []
  );
  const clipboard = useMemo(() => new BrowserNativeClipboardService(), []);

  return (
    <ProductActionBarContext.Provider value={{ openModal }}>
      <ProductListContext.Provider
        value={{
          listProducts,
          openProductModalInEditMode: new OpenProductModalInEditMode(bus),
          busSubscriber: bus,
          getProductUrl,
        }}
      >
        <ProductFormContext.Provider value={{ saveProduct, getProduct }}>
          <ProductTokenBoxContext.Provider value={{ clipboard }}>
            <ModalContext.Provider value={{ bus }}>
              {children}
            </ModalContext.Provider>
          </ProductTokenBoxContext.Provider>
        </ProductFormContext.Provider>
      </ProductListContext.Provider>
    </ProductActionBarContext.Provider>
  );
}
