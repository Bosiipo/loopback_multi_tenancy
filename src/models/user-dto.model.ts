import {Model, model} from '@loopback/repository';

@model()
export class UserDto extends Model {
  tenant: any;
  role: any;
  username: any;
  firstName: string | undefined;
  middleName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: number | undefined;
  id: number;
  permissions: boolean;

  constructor(data?: Partial<UserDto>) {
    super(data);
  }
}

export interface UserDtoRelations {
  // describe navigational properties here
}

export type UserDtoWithRelations = UserDto & UserDtoRelations;
