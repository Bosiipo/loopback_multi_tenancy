import {belongsTo, model, property} from '@loopback/repository';
import {UserTenants} from '.';
import {UserModifiableEntity} from './user-modifiable-entity.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'lbstarter', table: 'user_tenant_permissions'},
  },
})
export class UserTenantPermissions extends UserModifiableEntity {
  @property({
    type: 'number',
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  id: number;

  @belongsTo(
    () => UserTenants,
    {keyFrom: 'user_tenant_id', name: 'user_tenant_id'},
    {
      name: 'user_tenant_id',
      required: true,
    },
  )
  userTenantId: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'permission',
      dataType: 'character varying',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  permission: string;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {
      columnName: 'allowed',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  allowed: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserTenantPermissions>) {
    super(data);
  }
}

export interface UserTenantPermissionsRelations {
  // describe navigational properties here
}

export type UserTenantPermissionsWithRelations = UserTenantPermissions &
  UserTenantPermissionsRelations;
