import { useDispatch } from 'react-redux';
import { setAccessToken } from '~/config/rtkquery/accessTokenSlice';

export function useGlobalAccessToken() {
  const dispatch = useDispatch();
  const setGlobalAccessToken = (token: string) =>
    dispatch(setAccessToken(token));

  return setGlobalAccessToken;
}
