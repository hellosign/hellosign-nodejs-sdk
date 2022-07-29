import { AttributeTypeMap } from "./models";
import { ErrorResponseError } from "./errorResponseError";
export declare class ErrorResponse {
    "error": ErrorResponseError;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
}
