import { UnclaimedDraftCreateEmbeddedRequest } from "../model/unclaimedDraftCreateEmbeddedRequest";
import { UnclaimedDraftCreateEmbeddedWithTemplateRequest } from "../model/unclaimedDraftCreateEmbeddedWithTemplateRequest";
import { UnclaimedDraftCreateRequest } from "../model/unclaimedDraftCreateRequest";
import { UnclaimedDraftCreateResponse } from "../model/unclaimedDraftCreateResponse";
import { UnclaimedDraftEditAndResendRequest } from "../model/unclaimedDraftEditAndResendRequest";
import { Authentication, Interceptor } from "../model/models";
import { HttpBasicAuth, HttpBearerAuth } from "../model/models";
import { optionsI, returnTypeT } from "./apis";
export declare enum UnclaimedDraftApiApiKeys {
}
export declare class UnclaimedDraftApi {
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
    unclaimedDraftCreate(unclaimedDraftCreateRequest: UnclaimedDraftCreateRequest, options?: optionsI): Promise<returnTypeT<UnclaimedDraftCreateResponse>>;
    unclaimedDraftCreateEmbedded(unclaimedDraftCreateEmbeddedRequest: UnclaimedDraftCreateEmbeddedRequest, options?: optionsI): Promise<returnTypeT<UnclaimedDraftCreateResponse>>;
    unclaimedDraftCreateEmbeddedWithTemplate(unclaimedDraftCreateEmbeddedWithTemplateRequest: UnclaimedDraftCreateEmbeddedWithTemplateRequest, options?: optionsI): Promise<returnTypeT<UnclaimedDraftCreateResponse>>;
    unclaimedDraftEditAndResend(signatureRequestId: string, unclaimedDraftEditAndResendRequest: UnclaimedDraftEditAndResendRequest, options?: optionsI): Promise<returnTypeT<UnclaimedDraftCreateResponse>>;
}
