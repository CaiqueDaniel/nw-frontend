import { useSelector } from 'react-redux';
import { UserRolesCheckService } from '../../application/UserRolesCheckService';
import { selectUserRoles } from '~/config/rtkquery/accessTokenSlice';
import { LocalUserRolesCheckService } from '../services/LocalUserRolesCheckService';

export function useLocalUserRolesCheckService(): UserRolesCheckService {
  const userRoles = useSelector(selectUserRoles);
  const service = new LocalUserRolesCheckService(userRoles);  

  return {
    userRolesHasOneOf: (...roles: string[]) =>
      service.userRolesHasOneOf(...roles),
  };
}
