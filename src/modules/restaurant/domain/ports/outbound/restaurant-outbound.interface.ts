import { UUID } from '@shared/types/general.type';
import { RestaurantSearchDto, RestaurantUpdateDto } from '../../model/restaurant.dto';
import { Restaurant } from '../../model/restaurant.model';
import { Pagination } from '@shared/types/pagination.type';

export interface IRestaurantRepositoryQuery {
    get(id: UUID): Promise<Restaurant | null>;
    paginatedList(query?: RestaurantSearchDto): Promise<Pagination<Restaurant>>;
    list(query?: RestaurantSearchDto): Promise<Restaurant[]>;
}

export interface IRestaurantRepositoryCommand {
    create(restaurant: Restaurant): Promise<boolean>;
    update(id: UUID, data: RestaurantUpdateDto): Promise<boolean>;
    delete(id: UUID): Promise<boolean>;
}

export interface IRestaurantRepository extends IRestaurantRepositoryQuery, IRestaurantRepositoryCommand {}

export const RESTAURANT_REPOSITORY_TOKEN = Symbol('IRestaurantRepository');
