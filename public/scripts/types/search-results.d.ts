import { IPlaces } from './interfaces.js';
export declare function renderSearchStubBlock(): void;
export declare function renderEmptyOrErrorSearchBlock(reasonMessage: any): void;
export declare function renderSearchResultsBlock(places: IPlaces[] | Record<string, string> | Error): void;
