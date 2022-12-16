import 'jest';

import { EmbeddedApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
  toObj,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('EmbeddedApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new EmbeddedApi();

  it('testEmbeddedEditUrl', () => {
    const templateId = '5de8179668f2033afac48da1868d0093bf133266';

    const requestClass = 'EmbeddedEditUrlRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'EmbeddedEditUrlResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.EmbeddedEditUrlRequest>(requestData, requestClass);

    api.embeddedEditUrl(templateId, obj).then(response => {
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

  it('testEmbeddedSignUrl', () => {
    const signatureId = '50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b';

    const responseClass = 'EmbeddedSignUrlResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.embeddedSignUrl(signatureId).then(response => {
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
