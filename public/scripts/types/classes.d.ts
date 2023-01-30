import { IFindPlacesParams, IPlaces } from './interfaces.js';
export declare abstract class FindPlaces {
    private static fetchHomeApi;
    private static getHomeAPI;
    private static serializeToGetParams;
    private static getFlatsSDK;
    static findPlaces(params: IFindPlacesParams, homy: boolean, flatRent: boolean): Promise<IPlaces[]>;
    static sortPlaces(places: IPlaces[], orderBy: 'price' | 'remoteness', orderType: 'ASC' | 'DESC'): IPlaces[];
}
