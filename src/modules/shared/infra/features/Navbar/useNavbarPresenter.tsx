import { useNavbarContext } from './NavbarContext';

export function useNavbarPresenter() {
  const { tokenManager } = useNavbarContext();

  const onClickBtnLogout = () => tokenManager.revokeToken();

  return { onClickBtnLogout };
}
