import {Model, model, property} from '@loopback/repository';

@model()
export class TenantDto extends Model {

  constructor(data?: Partial<TenantDto>) {
    super(data);
  }
}

export interface TenantDtoRelations {
  // describe navigational properties here
}

export type TenantDtoWithRelations = TenantDto & TenantDtoRelations;
