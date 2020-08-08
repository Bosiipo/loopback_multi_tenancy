import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {UserTenantsRepository} from '.';
import {PgdbDataSource} from '../datasources';
import {
  UserTenantPermissions,
  UserTenantPermissionsRelations,
  UserTenants,
} from '../models';

export class UserTenantPermissionsRepository extends DefaultCrudRepository<
  UserTenantPermissions,
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
