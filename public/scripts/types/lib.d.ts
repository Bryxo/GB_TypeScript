import { IPlaces, IRequestParams } from './interfaces.js';
export declare function renderBlock(elementId: any, html: any): void;
export declare function renderToast(message: any, action: any): void;
export declare function fetchHomeApi(requestParams: IRequestParams): Promise<IPlaces[] | Record<string, string>>;
export declare function serializeToGetParams(params: object): string;
