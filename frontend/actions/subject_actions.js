import * as APIUtil from '../util/subject_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
// export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';

export const receiveSubjects = subjects => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const saveSubjects = subjects => dispatch => (
  APIUtil.saveSubjects(subjects).then(response =>
    dispatch(receiveCurrentUser(response.data)))
);
