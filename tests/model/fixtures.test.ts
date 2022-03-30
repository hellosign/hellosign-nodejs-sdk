import 'jest';
import { ObjectSerializer } from '../../model/models';
import { getFixtureData, diffJson } from '../test_utils';

const fixtures = [
  'AccountCreateRequest',
  'AccountUpdateRequest',
  'AccountVerifyRequest',
  'ApiAppCreateRequest',
  'ApiAppUpdateRequest',
  'EmbeddedEditUrlRequest',
  'OAuthTokenGenerateRequest',
  'OAuthTokenRefreshRequest',
  'ReportCreateRequest',
  'SignatureRequestBulkCreateEmbeddedWithTemplateRequest',
  'SignatureRequestBulkSendWithTemplateRequest',
  'SignatureRequestCreateEmbeddedRequest',
  'SignatureRequestCreateEmbeddedWithTemplateRequest',
  'SignatureRequestRemindRequest',
  'SignatureRequestSendRequest',
  'SignatureRequestSendWithTemplateRequest',
  'SignatureRequestUpdateRequest',
  'TeamAddMemberRequest',
  'TeamCreateRequest',
  'TeamRemoveMemberRequest',
  'TeamUpdateRequest',
  'TemplateAddUserRequest',
  'TemplateCreateEmbeddedDraftRequest',
  'TemplateRemoveUserRequest',
  'TemplateUpdateFilesRequest',
  'UnclaimedDraftCreateEmbeddedRequest',
  'UnclaimedDraftCreateEmbeddedWithTemplateRequest',
  'UnclaimedDraftCreateRequest',
  'UnclaimedDraftEditAndResendRequest',
]

describe.each(fixtures)('Fixture tests', (fixture) => {
  const fixtureData = getFixtureData(fixture);
  for (const [key, data] of Object.entries(fixtureData)) {
    it(`${fixture}.${key}`, () => {
      const obj = ObjectSerializer.deserialize(data, fixture);
      const serialized = ObjectSerializer.serialize(obj, fixture);

      const diff = diffJson(
        serialized,
        data,
      );

      expect(obj.constructor.name).toBe(fixture);
      expect(diff).toBeFalsy();
    });
  }
});
