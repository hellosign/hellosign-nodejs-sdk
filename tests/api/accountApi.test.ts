import 'jest';

import { AccountApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
  toObj,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('AccountApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new AccountApi();

  it('testHttpCodeRange', () => {
    const requestClass = 'AccountVerifyRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ErrorResponse';
    const responseData = getFixtureData(responseClass)['default'];

    const code = Math.round(Math.random() * (499 - 400)) + 400;
    setExpectedResponse(mock, responseData, code);

    const obj = toObj<m.AccountVerifyRequest>(requestData, requestClass);

    api.accountVerify(obj).then(response => {
      throw new Error('Should have thrown error: ' + response);
    }).catch(error => {
      expect(error.body.constructor.name).toBe(responseClass);
    });
  });

  it('testAccountCreate', () => {
    const requestClass = 'AccountCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'AccountCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.AccountCreateRequest>(requestData, requestClass);

    api.accountCreate(obj).then(response => {
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

  it('testAccountGet', () => {
    const responseClass = 'AccountGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.accountGet(undefined, "jack@example.com").then(response => {
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

  it('testAccountUpdate', () => {
    const requestClass = 'AccountUpdateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'AccountGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.AccountUpdateRequest>(requestData, requestClass);

    api.accountUpdate(obj).then(response => {
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

  it('testAccountVerify', () => {
    const requestClass = 'AccountVerifyRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'AccountVerifyResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.AccountVerifyRequest>(requestData, requestClass);

    api.accountVerify(obj).then(response => {
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
