import 'jest';

import { ApiAppApi } from '../../api/apis';
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

describe('ApiAppApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new ApiAppApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testApiAppCreate', () => {
    const requestClass = 'ApiAppCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ApiAppGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200, 'multipart/form-data');

    const obj = toObj<m.ApiAppCreateRequest>(requestData, requestClass);
    obj.customLogoFile = fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`);

    api.apiAppCreate(obj).then(response => {
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

  it('testApiAppGet', () => {
    const clientId = '0dd3b823a682527788c4e40cb7b6f7e9';

    const responseClass = 'ApiAppGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.apiAppGet(clientId).then(response => {
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

  it('testApiAppUpdate', () => {
    const clientId = '0dd3b823a682527788c4e40cb7b6f7e9';

    const requestClass = 'ApiAppUpdateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ApiAppGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.ApiAppUpdateRequest>(requestData, requestClass);
    obj.customLogoFile = fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`);

    api.apiAppUpdate(clientId, obj).then(response => {
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

  it.todo('testApiAppDelete');

  it('testApiAppList', () => {
    const page = 1;
    const pageSize = 20;

    const responseClass = 'ApiAppListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.apiAppList(page, pageSize).then(response => {
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
