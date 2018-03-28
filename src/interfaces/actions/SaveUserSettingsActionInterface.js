// @flow
import { SAVE_SETTINGS } from "../../actions/user";
import { UserSettingsInterface } from "../dto/UserSettingsInterface";

export type SaveUserSettingsActionInterface = {
    action: SAVE_SETTINGS,
    payload: UserSettingsInterface
};
