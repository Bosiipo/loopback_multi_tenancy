import {model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'lbstarter', table: 'auth_clients'},
  },
})
export class AuthClients extends BaseEntity {
  @property({
    type: 'number',
    required: true,
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

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {
      columnName: 'client_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  clientId: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'client_secret',
      dataType: 'character varying',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  clientSecret: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'redirect_url',
      dataType: 'character varying',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  redirectUrl?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'access_token_expiration',
      dataType: 'character varying',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  accessTokenExpiration: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {
      columnName: 'refresh_token_expiration',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  refreshTokenExpiration: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {
      columnName: 'auth_code_expiration',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  authCodeExpiration: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'secret',
      dataType: 'character varying',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  secret: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'user_ids',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  userIds?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AuthClients>) {
    super(data);
  }
}

export interface AuthClientsRelations {
  // describe navigational properties here
}

export type AuthClientsWithRelations = AuthClients & AuthClientsRelations;
