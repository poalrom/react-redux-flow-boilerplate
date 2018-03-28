// @flow

import { combineReducers } from 'redux';
import SAVE_SETTINGS from '../actions/user';
import UserSettingsInterface from '../interfaces/dto/UserSettingsInterface';
import SaveUserSettingsActionInterface from '../interfaces/actions/SaveUserSettingsActionInterface';

function settings(
  state: UserSettingsInterface = {name:'', email: ''},
  action: SaveUserSettingsActionInterface,
): UserSettingsInterface {
  return action.type === SAVE_SETTINGS ? action.payload : state;
}

export default combineReducers({
  settings,
});
