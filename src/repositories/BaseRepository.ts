import { Repository }                from 'typeorm';
import { ResourceNotFoundException } from '../exceptions/ResourceNotFoundException';

/**
 * Common repository methods.
 */
export class BaseRepository<T> extends Repository<T> {

    /**
     * Retrieve an existing record by id and organization.
     *
     * @param {string} id UUID
     * @param {string} organizationId UUID
     * @param relations Tables to join in
     *
     * @returns {Promise<T>}
     *
     * @throws {ResourceNotFoundException} Thrown if record could not be located.
     */
    public getByIdAndOrganizationId(id: string, organizationId: string, relations?: Array<string>): Promise<T> {

        return new Promise(async (resolve, reject) => {

            const entity = await this.findOne({ where: { id, organizationId }, relations });

            if (entity) {

                resolve(entity);

            } else {

                reject(new ResourceNotFoundException('could not locate item'));

            }

        });

    }

    public async deleteByIdAndOrganizationId(id: string, organizationId: string): Promise<T> {

        return this.remove(await this.getByIdAndOrganizationId(id, organizationId));

    }

    public getByOrganizationId(organization: any, relations?: Array<string>): Promise<Array<T>> {

        return this.find({ where: { organization }, relations });

    }

    public getById(id: string, relations?: Array<string>): Promise<T> {

        return new Promise(async (resolve, reject) => {

            const entity = await this.findOne({ where: { id }, relations });

            if (entity) {

                resolve(entity);

            } else {

                reject(new ResourceNotFoundException('could not locate item'));

            }

        });

    }

    public findByFields(where: { [ key: string ]: string | number }, relations?: Array<string>): Promise<Array<T>> {

        return this.find({ where, relations });

    }

}
