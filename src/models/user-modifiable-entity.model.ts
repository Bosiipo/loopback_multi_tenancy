import {model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';

@model({settings: {strict: false}})
export class UserModifiableEntity extends BaseEntity {
  @property({
    type: 'number',
    name: 'created_by',
  })
  createdBy?: number;

  @property({
    type: 'number',
    name: 'modified_by',
  })
  modifiedBy?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserModifiableEntity>) {
    super(data);
  }
}

export interface UserModifiableEntityRelations {
  // describe navigational properties here
}

export type UserModifiableEntityWithRelations = UserModifiableEntity &
  UserModifiableEntityRelations;
