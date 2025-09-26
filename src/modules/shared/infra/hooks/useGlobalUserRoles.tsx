import { useDispatch } from 'react-redux';
import { setUserRoles } from '~/config/rtkquery/accessTokenSlice';

export function useGlobalUserRoles() {
  const dispatch = useDispatch();
  return (roles: string[]) => dispatch(setUserRoles(roles));
}
