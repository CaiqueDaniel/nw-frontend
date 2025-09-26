import { UserRolesCheckService } from '../../core/application/UserRolesCheckService';

export class LocalUserRolesCheckService implements UserRolesCheckService {
  constructor(private readonly sourceRoles: string[]) {}

  userRolesHasOneOf(...roles: string[]): boolean {
    return Boolean(
      roles.map((role) => this.sourceRoles.includes(role)).filter(Boolean)
        .length
    );
  }
}
