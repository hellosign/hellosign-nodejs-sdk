import { ObjectSerializer } from '../model/models';

import jsonDiff from 'json-diff';
import MockAdapter from 'axios-mock-adapter';

export const getFixtureData = (file: string): Object => {
  return require(`../test_fixtures/${file}.json`);
};

export const setExpectedResponse = (
  mock: MockAdapter,
  responseBody: Object,
  statusCode: number,
  contentType?: string,
): MockAdapter => mock.onAny(/hellosign.com/)
  .reply((config) => {
    if (contentType) {
      if (contentType === 'multipart/form-data') {
        // @ts-ignore
        expect(config.headers['Content-Type'].includes('multipart/form-data')).toBeTruthy();
      } else {
        // @ts-ignore
        expect(config.headers['Content-Type'].includes(contentType)).toBeTruthy();
      }
    }

    return [statusCode, responseBody];
  });

export const diffJson = (
  val1: any,
  val2: any
) => jsonDiff.diffString(val1, val2, { color: false });

export const toObj = <T>(
  data: any,
  type: string
): T => ObjectSerializer.deserialize(data, type);

export const fromObj = (
  data: any,
  type: string
) => ObjectSerializer.serialize(data, type);
