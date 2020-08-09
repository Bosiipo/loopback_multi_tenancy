import {Model, model, property} from '@loopback/repository';

@model()
export class UserPermissionsDto extends Model {

  constructor(data?: Partial<UserPermissionsDto>) {
    super(data);
  }
}

export interface UserPermissionsDtoRelations {
  // describe navigational properties here
}

export type UserPermissionsDtoWithRelations = UserPermissionsDto & UserPermissionsDtoRelations;
