import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
// import {RolesRepository, TenantsRepository, UsersRepository} from '.';
import {PgdbDataSource} from '../datasources';
import {
  Roles,
  Tenants,
  Users,
  UserTenants,
  UserTenantsRelations,
} from '../models';
import {RolesRepository} from './roles.repository';
import {TenantsRepository} from './tenants.repository';
import {UsersRepository} from './users.repository';

export class UserTenantsRepository extends DefaultCrudRepository<
  UserTenants,
  typeof UserTenants.prototype.id,
  UserTenantsRelations
> {
  public readonly tenant: BelongsToAccessor<
    Tenants,
    typeof UserTenants.prototype.id
  >;
  public readonly user: BelongsToAccessor<
    Users,
    typeof UserTenants.prototype.id
  >;
  public readonly role: BelongsToAccessor<
    Roles,
    typeof UserTenants.prototype.id
  >;
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
    @repository.getter(TenantsRepository)
    tenantRepositoryGetter: Getter<TenantsRepository>,
    @repository.getter(UsersRepository)
    userRepositoryGetter: Getter<UsersRepository>,
    @repository.getter(RolesRepository)
    roleRepositoryGetter: Getter<RolesRepository>,
  ) {
    super(UserTenants, dataSource);
    this.tenant = this._createBelongsToAccessorFor(
      'tenant_id',
      tenantRepositoryGetter,
    );
    this.user = this._createBelongsToAccessorFor(
      'user_id',
      userRepositoryGetter,
    );
    this.role = this._createBelongsToAccessorFor(
      'role_id',
      roleRepositoryGetter,
    );
  }
}
