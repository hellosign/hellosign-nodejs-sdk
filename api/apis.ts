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
import { AttributeTypeMap, ObjectSerializer } from "../model/models";
import * as http from "http";
import fs from "fs";
import { AxiosResponse } from "axios";
import formData from "form-data";
import Qs from "Qs";

export class HttpError extends Error {
  constructor(
    public response: AxiosResponse,
    public body: any,
    public statusCode?: number
  ) {
    super("HTTP request failed");
    this.name = "HttpError";
  }
}

export interface optionsI {
  headers: { [name: string]: string };
}

export interface returnTypeT<T> {
  response: AxiosResponse;
  body: T;
}

export interface returnTypeI {
  response: AxiosResponse;
  body?: any;
}

export const queryParamsSerializer = (params) => {
  return Qs.stringify(params, { arrayFormat: "brackets" });
};

export { RequestFile } from "../model/models";

export const APIS = [
  AccountApi,
  ApiAppApi,
  BulkSendJobApi,
  EmbeddedApi,
  OAuthApi,
  ReportApi,
  SignatureRequestApi,
  TeamApi,
  TemplateApi,
  UnclaimedDraftApi,
];

/**
 * Generates an object containing binary (file) data and other form data.
 *
 * Binary data is left as-is and added to root-level data
 * Non-binary data is converted to JSON and added to data.body
 *
 * @param obj
 * @param typemap
 * @param instantiateFiles
 * @param rootFilePath
 */
export const generateFormData = (
  obj: any,
  typemap: AttributeTypeMap,
  instantiateFiles: boolean,
  rootFilePath?: string
): { localVarUseFormData: boolean; data: object } => {
  const data = {};
  let localVarUseFormData = false;

  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return {
      localVarUseFormData,
      data,
    };
  }

  typemap.forEach((paramInfo) => {
    if (obj[paramInfo.name] === undefined) {
      return;
    }

    /**
     * Everything except binary (file) data can be serialized to JSON.
     * If file data we want to keep as-is.
     */
    if (paramInfo.type.indexOf("RequestFile") !== -1) {
      localVarUseFormData = true;

      /**
       * User is able to pass the path to a file they want to upload.
       * Here we can instantiate the object for them,
       * ony if instantiateFiles is true
       */
      if (instantiateFiles && typeof obj[paramInfo.name] === "string") {
        const filepath = rootFilePath
          ? `${rootFilePath}/${obj[paramInfo.name]}`
          : obj[paramInfo.name];
        data[paramInfo.baseName] = fs.createReadStream(filepath);
        return;
      }

      /**
       * Some parameters can be arrays of files
       */
      if (Array.isArray(obj[paramInfo.name])) {
        obj[paramInfo.name].forEach((childObject, i) => {
          /**
           * We want to conform to form data key naming. For example we can't
           * actually send a true array of data in our request:
           * form[file][0] = ...
           * form[file][1] = ...
           *
           * We need to change the key name to match formdata:
           *
           * form["file[0]"] = ...
           * form["file[1]"] = ...
           */
          const key = `${paramInfo.baseName}[${i}]`;

          if (instantiateFiles && typeof childObject === "string") {
            const filepath = rootFilePath
              ? `${rootFilePath}/${childObject}`
              : childObject;
            data[key] = fs.createReadStream(filepath);
            return;
          }

          data[paramInfo.baseName] = childObject;
        });

        return;
      }

      /**
       * File is already a type of `RequestFile`
       * @see RequestFile
       */
      data[paramInfo.baseName] = obj[paramInfo.name];
      return;
    }

    /**
     * Everything else that is not binary data (file uploads) can be
     * serialized to JSON and sent over. This helps reduce complexity
     * when trying to keep formdata key names and serializing each nested
     * object individually.
     */
    const serialized = ObjectSerializer.serialize(
      obj[paramInfo.name],
      paramInfo.type
    );

    data[paramInfo.baseName] = shouldJsonify(serialized)
      ? JSON.stringify(serialized)
      : serialized;
  });

  return {
    localVarUseFormData,
    data,
  };
};

export const toFormData = (obj: object): formData => {
  const form = new formData();

  Object.keys(obj).forEach((key) => {
    form.append(key, obj[key]);
  });

  return form;
};

const shouldJsonify = (val: any): boolean => val === Object(val);