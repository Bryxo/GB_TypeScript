import { HOMY_API_URL } from './constants.js';
import { FlatRentSdk } from './flat-rent-sdk.js';
export class FindPlaces {
    static async fetchHomeApi(requestParams) {
        if (requestParams.method === 'GET') {
            const fetchURL = HOMY_API_URL + requestParams.endPoint + this.serializeToGetParams(requestParams.parameters);
            const response = await fetch(fetchURL);
            return await response.json();
        }
        else {
            const fetchURL = HOMY_API_URL + requestParams.endPoint;
            const response = await fetch(fetchURL, {
                method: requestParams.method,
                body: JSON.stringify(requestParams.parameters)
            });
            return await response.json();
        }
    }
    static async getHomeAPI(params) {
        delete params.city;
        const places = await this.fetchHomeApi({
            method: 'GET',
            endPoint: '/places',
            parameters: params
        });
        if (Array.isArray(places)) {
            return places;
        }
        else {
            return [];
        }
    }
    static serializeToGetParams(params) {
        return '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    }
    static async getFlatsSDK(params) {
        const flats = new FlatRentSdk();
        const parameters = {
            city: params?.city ? params.city : '',
            checkInDate: new Date(params.checkInDate),
            checkOutDate: new Date(params.checkOutDate),
        };
        params.maxPrice ? parameters.priceLimit = params.maxPrice : null;
        const result = await flats.search(parameters);
        if (!Array.isArray(result)) {
            return [];
        }
        return result.map(flat => ({
            id: flat.id,
            image: flat.photos[0],
            name: flat.title,
            description: flat.details,
            remoteness: 0,
            bookedDates: flat.bookedDates.map(bookDate => bookDate.getTime()),
            price: flat.totalPrice
        }));
    }
    static async findPlaces(params, homy, flatRent) {
        let allPlaces = [];
        if (flatRent) {
            const places = await this.getFlatsSDK(params);
            allPlaces = [...allPlaces, ...places];
        }
        if (homy) {
            const places = await this.getHomeAPI(params);
            allPlaces = [...allPlaces, ...places];
        }
        return allPlaces;
    }
    static sortPlaces(places, orderBy, orderType) {
        if (orderType === 'ASC') {
            return places.sort((a, b) => a[orderBy] >= b[orderBy] ? 1 : -1);
        }
        if (orderType === 'DESC') {
            return places.sort((a, b) => a[orderBy] <= b[orderBy] ? 1 : -1);
        }
        return places;
    }
}
