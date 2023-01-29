import { IFindPlacesParams, IPlaces } from './interfaces.js';
export declare function renderSearchFormBlock(dateStart?: string, dateEnd?: string): void;
export declare function search(params: IFindPlacesParams, render: (places: IPlaces[]) => void, homy: boolean, flatRent: boolean): Promise<void>;
