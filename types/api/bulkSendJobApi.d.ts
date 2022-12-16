import { BulkSendJobGetResponse } from "../model/bulkSendJobGetResponse";
import { BulkSendJobListResponse } from "../model/bulkSendJobListResponse";
import { Authentication, Interceptor } from "../model/models";
import { HttpBasicAuth, HttpBearerAuth } from "../model/models";
import { optionsI, returnTypeT } from "./apis";
export declare enum BulkSendJobApiApiKeys {
}
export declare class BulkSendJobApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_key: HttpBasicAuth;
        oauth2: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: string): void;
    set username(username: string);
    set password(password: string);
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    bulkSendJobGet(bulkSendJobId: string, options?: optionsI): Promise<returnTypeT<BulkSendJobGetResponse>>;
    bulkSendJobList(page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<BulkSendJobListResponse>>;
}
