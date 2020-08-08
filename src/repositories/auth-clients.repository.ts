import {DefaultCrudRepository} from '@loopback/repository';
import {AuthClients, AuthClientsRelations} from '../models';
import {PgdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AuthClientsRepository extends DefaultCrudRepository<
  AuthClients,
  typeof AuthClients.prototype.id,
  AuthClientsRelations
> {
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
  ) {
    super(AuthClients, dataSource);
  }
}
