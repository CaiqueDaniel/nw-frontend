import { useProductActionBarContext } from "./ProductActionBarContext";

export function useProductActionBarPresenter() {
    const { openModal } = useProductActionBarContext();
    const onClickBtnAdd = () => openModal.execute({ eventName: 'product-modal-opened' });

    return { onClickBtnAdd }
}