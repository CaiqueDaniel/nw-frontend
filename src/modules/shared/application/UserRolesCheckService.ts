export interface UserRolesCheckService {
  userRolesHasOneOf(...roles: string[]): boolean;
}
