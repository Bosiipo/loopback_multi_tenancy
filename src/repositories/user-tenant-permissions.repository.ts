import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {PgdbDataSource} from '../datasources';
import {
  UserTenantPermissions,
  UserTenantPermissionsRelations,
  UserTenants,
} from '../models';
import {UserTenantsRepository} from './user-tenants.repository';

export class UserTenantPermissionsRepository extends DefaultCrudRepository<
  UserTenantPermissions,
  // UserTenants,
  typeof UserTenantPermissions.prototype.id,
  UserTenantPermissionsRelations
> {
  public readonly userTenant: BelongsToAccessor<
    UserTenants,
    typeof UserTenantPermissions.prototype.id
  >;
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
    @repository.getter(UserTenantsRepository)
    utRepositoryGetter: Getter<UserTenantsRepository>,
  ) {
    super(UserTenantPermissions, dataSource);
    this.userTenant = this._createBelongsToAccessorFor(
      'user_tenant_id',
      utRepositoryGetter,
    );
  }
}
