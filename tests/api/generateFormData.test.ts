/* tslint:disable */
import 'jest';
const fs = require('fs');

import { generateFormData } from '../../api/apis';
import * as m from '../../model/models';
import { toObj } from '../test_utils';

describe('GenerateformDataTest', () => {
  const rootFilePath = __dirname + '/../../oas/test_fixtures';

  it('testSingleFileInstantiated', () => {
    const instantiateFiles = true;

    const data = {
      custom_logo_file: 'pdf-sample.pdf',
    };

    const obj = toObj<m.ApiAppCreateRequest>(data, 'ApiAppCreateRequest');

    const result = generateFormData(
      obj,
      m.ApiAppCreateRequest.attributeTypeMap,
      instantiateFiles,
      rootFilePath
    );

    expect(result.data['custom_logo_file'].constructor.name).toBe('ReadStream');
  });

  it('testMultipleFilesInstantiated', () => {
    const instantiateFiles = true;

    const data = {
      file: ['pdf-sample.pdf'],
    };

    const obj = toObj<m.SignatureRequestSendRequest>(data, 'SignatureRequestSendRequest');

    const result = generateFormData(
      obj,
      m.SignatureRequestSendRequest.attributeTypeMap,
      instantiateFiles,
      rootFilePath
    );

    expect(result.data['file[0]'].constructor.name).toBe('ReadStream');
  });

  it('testFilesNotInstantiatedIfFlagNotTrue', () => {
    let instantiateFiles = false;

    const data = {
      customLogoFile: 'pdf-sample.pdf',
    };

    let result = generateFormData(
      data,
      m.ApiAppCreateRequest.attributeTypeMap,
      instantiateFiles,
      rootFilePath
    );

    expect(typeof result.data['custom_logo_file']).toBe('string');

    instantiateFiles = true;

    result = generateFormData(
      data,
      m.ApiAppCreateRequest.attributeTypeMap,
      instantiateFiles,
      rootFilePath
    );

    expect(result.data['custom_logo_file'].constructor.name).toBe('ReadStream');
  });

  it('testRootFilePathPrependedToFile', () => {
    const instantiateFiles = true;

    const data = {
      custom_logo_file: 'pdf-sample.pdf',
    };

    const expectedFilePath = `${rootFilePath}/pdf-sample.pdf`;

    const obj = toObj<m.ApiAppCreateRequest>(data, 'ApiAppCreateRequest');

    const result = generateFormData(
      obj,
      m.ApiAppCreateRequest.attributeTypeMap,
      instantiateFiles,
      rootFilePath
    );

    const file: typeof fs.ReadStream = result.data['custom_logo_file'];

    expect(file.path).toBe(expectedFilePath);
  });

  it('testValuesJsonified', () => {
    const instantiateFiles = true;

    const oauth = new m.SubOAuth()
    oauth.callbackUrl = 'https://oauth-callback.test';
    oauth.scopes = [m.SubOAuth.ScopesEnum.AccountAccess]

    const obj = new m.ApiAppCreateRequest();
    obj.name = 'My name is';
    obj.callbackUrl = 'https://awesome.test';
    obj.domains = ['domain1.com', 'domain2.com'];
    obj.oauth = oauth;

    const result = generateFormData(
      obj,
      m.ApiAppCreateRequest.attributeTypeMap,
      instantiateFiles,
      rootFilePath
    );

    expect(result.data['name']).toBe(obj.name);
    expect(result.data['callback_url']).toBe(obj.callbackUrl);
    expect(result.data['domains']).toBe(JSON.stringify(obj.domains));

    const expectedOauth = JSON.stringify({
      callback_url: oauth.callbackUrl,
      scopes: oauth.scopes,
    });

    expect(result.data['oauth']).toBe(expectedOauth);
  });
});
