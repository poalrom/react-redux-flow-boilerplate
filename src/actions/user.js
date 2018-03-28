// @flow

import UserSettingsInterface from '../interfaces/dto/UserSettingsInterface';
import SaveUserSettingsActionInterface from '../interfaces/actions/SaveUserSettingsActionInterface';

export const SAVE_SETTINGS = 'user/START_SAVE_SETTINGS';

function saveSettings(data: UserSettingsInterface): SaveUserSettingsActionInterface {
  return { type: SAVE_SETTINGS, payload: data };
}

export function alertAndSaveSettings(data: UserSettingsInterface) {
  return dispatch => {
    setTimeout(() => {
      alert(`Имя: ${data.name}, Email: ${data.email}`);
      dispatch(saveSettings(data));
    }, 1000);
  };
}
