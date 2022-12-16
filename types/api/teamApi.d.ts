import { TeamAddMemberRequest } from "../model/teamAddMemberRequest";
import { TeamCreateRequest } from "../model/teamCreateRequest";
import { TeamGetInfoResponse } from "../model/teamGetInfoResponse";
import { TeamGetResponse } from "../model/teamGetResponse";
import { TeamInvitesResponse } from "../model/teamInvitesResponse";
import { TeamMembersResponse } from "../model/teamMembersResponse";
import { TeamRemoveMemberRequest } from "../model/teamRemoveMemberRequest";
import { TeamSubTeamsResponse } from "../model/teamSubTeamsResponse";
import { TeamUpdateRequest } from "../model/teamUpdateRequest";
import { Authentication, Interceptor } from "../model/models";
import { HttpBasicAuth, HttpBearerAuth } from "../model/models";
import { optionsI, returnTypeT, returnTypeI } from "./apis";
export declare enum TeamApiApiKeys {
}
export declare class TeamApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_key: HttpBasicAuth;
        oauth2: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: string): void;
    set username(username: string);
    set password(password: string);
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    teamAddMember(teamAddMemberRequest: TeamAddMemberRequest, teamId?: string, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamCreate(teamCreateRequest: TeamCreateRequest, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamDelete(options?: optionsI): Promise<returnTypeI>;
    teamGet(options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamInfo(teamId?: string, options?: optionsI): Promise<returnTypeT<TeamGetInfoResponse>>;
    teamInvites(emailAddress?: string, options?: optionsI): Promise<returnTypeT<TeamInvitesResponse>>;
    teamMembers(teamId: string, page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<TeamMembersResponse>>;
    teamRemoveMember(teamRemoveMemberRequest: TeamRemoveMemberRequest, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamSubTeams(teamId: string, page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<TeamSubTeamsResponse>>;
    teamUpdate(teamUpdateRequest: TeamUpdateRequest, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
}
