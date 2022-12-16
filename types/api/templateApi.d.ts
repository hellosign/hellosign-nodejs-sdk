/// <reference types="node" />
import { FileResponse } from "../model/fileResponse";
import { FileResponseDataUri } from "../model/fileResponseDataUri";
import { TemplateAddUserRequest } from "../model/templateAddUserRequest";
import { TemplateCreateEmbeddedDraftRequest } from "../model/templateCreateEmbeddedDraftRequest";
import { TemplateCreateEmbeddedDraftResponse } from "../model/templateCreateEmbeddedDraftResponse";
import { TemplateGetResponse } from "../model/templateGetResponse";
import { TemplateListResponse } from "../model/templateListResponse";
import { TemplateRemoveUserRequest } from "../model/templateRemoveUserRequest";
import { TemplateUpdateFilesRequest } from "../model/templateUpdateFilesRequest";
import { TemplateUpdateFilesResponse } from "../model/templateUpdateFilesResponse";
import { Authentication, Interceptor } from "../model/models";
import { HttpBasicAuth, HttpBearerAuth } from "../model/models";
import { optionsI, returnTypeT, returnTypeI } from "./apis";
export declare enum TemplateApiApiKeys {
}
export declare class TemplateApi {
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
    templateAddUser(templateId: string, templateAddUserRequest: TemplateAddUserRequest, options?: optionsI): Promise<returnTypeT<TemplateGetResponse>>;
    templateCreateEmbeddedDraft(templateCreateEmbeddedDraftRequest: TemplateCreateEmbeddedDraftRequest, options?: optionsI): Promise<returnTypeT<TemplateCreateEmbeddedDraftResponse>>;
    templateDelete(templateId: string, options?: optionsI): Promise<returnTypeI>;
    templateFiles(templateId: string, fileType?: "pdf" | "zip", options?: optionsI): Promise<returnTypeT<Buffer>>;
    templateFilesAsDataUri(templateId: string, options?: optionsI): Promise<returnTypeT<FileResponseDataUri>>;
    templateFilesAsFileUrl(templateId: string, options?: optionsI): Promise<returnTypeT<FileResponse>>;
    templateGet(templateId: string, options?: optionsI): Promise<returnTypeT<TemplateGetResponse>>;
    templateList(accountId?: string, page?: number, pageSize?: number, query?: string, options?: optionsI): Promise<returnTypeT<TemplateListResponse>>;
    templateRemoveUser(templateId: string, templateRemoveUserRequest: TemplateRemoveUserRequest, options?: optionsI): Promise<returnTypeT<TemplateGetResponse>>;
    templateUpdateFiles(templateId: string, templateUpdateFilesRequest: TemplateUpdateFilesRequest, options?: optionsI): Promise<returnTypeT<TemplateUpdateFilesResponse>>;
}
