import {Entity, model, property} from '@loopback/repository';

@model()
export class BaseEntity extends Entity {
  @property({
    type: 'date',
    default: () => new Date(),
    name: 'created_on',
  })
  createdOn?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
    name: 'modified_on',
  })
  modifiedOn?: Date;

  @property({
    type: 'boolean',
    default: false,
  })
  deleted?: boolean;

  constructor(data?: Partial<BaseEntity>) {
    super(data);
  }
}

export interface BaseEntityRelations {
  // describe navigational properties here
}

export type BaseEntityWithRelations = BaseEntity & BaseEntityRelations;
