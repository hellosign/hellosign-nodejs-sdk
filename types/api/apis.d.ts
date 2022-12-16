export * from "./accountApi";
import { AccountApi } from "./accountApi";
export * from "./apiAppApi";
import { ApiAppApi } from "./apiAppApi";
export * from "./bulkSendJobApi";
import { BulkSendJobApi } from "./bulkSendJobApi";
export * from "./embeddedApi";
import { EmbeddedApi } from "./embeddedApi";
export * from "./oAuthApi";
import { OAuthApi } from "./oAuthApi";
export * from "./reportApi";
import { ReportApi } from "./reportApi";
export * from "./signatureRequestApi";
import { SignatureRequestApi } from "./signatureRequestApi";
export * from "./teamApi";
import { TeamApi } from "./teamApi";
export * from "./templateApi";
import { TemplateApi } from "./templateApi";
export * from "./unclaimedDraftApi";
import { UnclaimedDraftApi } from "./unclaimedDraftApi";
import { AttributeTypeMap } from "../model/models";
import { AxiosResponse } from "axios";
import formData from "form-data";
export declare class HttpError extends Error {
    response: AxiosResponse;
    body: any;
    statusCode?: number | undefined;
    constructor(response: AxiosResponse, body: any, statusCode?: number | undefined);
}
export interface optionsI {
    headers: {
        [name: string]: string;
    };
}
export interface returnTypeT<T> {
    response: AxiosResponse;
    body: T;
}
export interface returnTypeI {
    response: AxiosResponse;
    body?: any;
}
export declare const queryParamsSerializer: (params: any) => any;
export { RequestFile } from "../model/models";
export declare const APIS: (typeof AccountApi | typeof ApiAppApi | typeof BulkSendJobApi | typeof EmbeddedApi | typeof OAuthApi | typeof ReportApi | typeof SignatureRequestApi | typeof TeamApi | typeof TemplateApi | typeof UnclaimedDraftApi)[];
export declare const generateFormData: (obj: any, typemap: AttributeTypeMap) => {
    localVarUseFormData: boolean;
    data: object;
};
export declare const toFormData: (obj: object) => formData;
