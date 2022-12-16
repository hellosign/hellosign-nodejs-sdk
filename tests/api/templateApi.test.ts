import 'jest';

import { TemplateApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
  toObj,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('TemplateApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new TemplateApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testTemplateAddUser', () => {
    const templateId = 'f57db65d3f933b5316d398057a36176831451a35';
    const requestClass = 'TemplateAddUserRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.TemplateAddUserRequest>(requestData, requestClass);

    api.templateAddUser(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateCreateEmbeddedDraft', () => {
    const requestClass = 'TemplateCreateEmbeddedDraftRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateCreateEmbeddedDraftResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.TemplateCreateEmbeddedDraftRequest>(requestData, requestClass);
    obj.file = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.templateCreateEmbeddedDraft(obj).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it.todo('testTemplateDelete');

  it('testTemplateFiles', () => {
    const templateId = 'f57db65d3f933b5316d398057a36176831451a35';
    const fileType = 'pdf';
    const getUrl = false;
    const getDataUri = false;

    const responseClass = 'FileResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.templateFilesAsFileUrl(templateId).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateGet', () => {
    const templateId = 'f57db65d3f933b5316d398057a36176831451a35';

    const responseClass = 'TemplateGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.templateGet(templateId).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateList', () => {
    const accountId = 'all';

    const responseClass = 'TemplateListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.templateList(accountId).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateRemoveUser', () => {
    const templateId = '21f920ec2b7f4b6bb64d3ed79f26303843046536';

    const requestClass = 'TemplateRemoveUserRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.TemplateRemoveUserRequest>(requestData, requestClass);

    api.templateRemoveUser(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateUpdateFiles', () => {
    const templateId = '21f920ec2b7f4b6bb64d3ed79f26303843046536';

    const requestClass = 'TemplateUpdateFilesRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateUpdateFilesResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.TemplateUpdateFilesRequest>(requestData, requestClass);
    obj.file = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.templateUpdateFiles(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
