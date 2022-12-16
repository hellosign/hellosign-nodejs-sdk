import { AccountCreateRequest } from "../model/accountCreateRequest";
import { AccountCreateResponse } from "../model/accountCreateResponse";
import { AccountGetResponse } from "../model/accountGetResponse";
import { AccountUpdateRequest } from "../model/accountUpdateRequest";
import { AccountVerifyRequest } from "../model/accountVerifyRequest";
import { AccountVerifyResponse } from "../model/accountVerifyResponse";
import { Authentication, Interceptor } from "../model/models";
import { HttpBasicAuth, HttpBearerAuth } from "../model/models";
import { optionsI, returnTypeT } from "./apis";
export declare enum AccountApiApiKeys {
}
export declare class AccountApi {
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
    accountCreate(accountCreateRequest: AccountCreateRequest, options?: optionsI): Promise<returnTypeT<AccountCreateResponse>>;
    accountGet(accountId?: string, emailAddress?: string, options?: optionsI): Promise<returnTypeT<AccountGetResponse>>;
    accountUpdate(accountUpdateRequest: AccountUpdateRequest, options?: optionsI): Promise<returnTypeT<AccountGetResponse>>;
    accountVerify(accountVerifyRequest: AccountVerifyRequest, options?: optionsI): Promise<returnTypeT<AccountVerifyResponse>>;
}
