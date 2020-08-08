import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Tenants} from '../models';
import {TenantsRepository} from '../repositories';

export class TenantController {
  constructor(
    @repository(TenantsRepository)
    public tenantsRepository : TenantsRepository,
  ) {}

  @post('/tenants', {
    responses: {
      '200': {
        description: 'Tenants model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tenants)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tenants, {
            title: 'NewTenants',
            
          }),
        },
      },
    })
    tenants: Tenants,
  ): Promise<Tenants> {
    return this.tenantsRepository.create(tenants);
  }

  @get('/tenants/count', {
    responses: {
      '200': {
        description: 'Tenants model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Tenants) where?: Where<Tenants>,
  ): Promise<Count> {
    return this.tenantsRepository.count(where);
  }

  @get('/tenants', {
    responses: {
      '200': {
        description: 'Array of Tenants model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Tenants, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Tenants) filter?: Filter<Tenants>,
  ): Promise<Tenants[]> {
    return this.tenantsRepository.find(filter);
  }

  @patch('/tenants', {
    responses: {
      '200': {
        description: 'Tenants PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tenants, {partial: true}),
        },
      },
    })
    tenants: Tenants,
    @param.where(Tenants) where?: Where<Tenants>,
  ): Promise<Count> {
    return this.tenantsRepository.updateAll(tenants, where);
  }

  @get('/tenants/{id}', {
    responses: {
      '200': {
        description: 'Tenants model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tenants, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tenants, {exclude: 'where'}) filter?: FilterExcludingWhere<Tenants>
  ): Promise<Tenants> {
    return this.tenantsRepository.findById(id, filter);
  }

  @patch('/tenants/{id}', {
    responses: {
      '204': {
        description: 'Tenants PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tenants, {partial: true}),
        },
      },
    })
    tenants: Tenants,
  ): Promise<void> {
    await this.tenantsRepository.updateById(id, tenants);
  }

  @put('/tenants/{id}', {
    responses: {
      '204': {
        description: 'Tenants PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tenants: Tenants,
  ): Promise<void> {
    await this.tenantsRepository.replaceById(id, tenants);
  }

  @del('/tenants/{id}', {
    responses: {
      '204': {
        description: 'Tenants DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tenantsRepository.deleteById(id);
  }
}
