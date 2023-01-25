import { IPlaces, IUser } from './interfaces.js';
export declare function renderUserBlock(): void;
export declare function getUserData(): IUser;
export declare function getFavoritesAmount(): number;
export declare function toggleFavorites(favPlace: Pick<IPlaces, 'id' | 'image' | 'name'>): void;
export declare function isFavorite(placeId: string): boolean;
