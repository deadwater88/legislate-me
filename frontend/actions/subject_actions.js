import * as APIUtil from '../util/subject_api_util';

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';

export const receiveSubjects = subjects => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const receiveSubject = subject => ({
  type: RECEIVE_SUBJECT,
  subject
});

export const fetchSubjects = () => dispatch => (
  APIUtil.fetchSubjects().then(subjects => (
    dispatch(receiveSubjects(subjects))
  ))
);

export const saveSubject = subject => dispatch => (
  APIUtil.saveSubject(subject).then(savedSubject => (
    dispatch(receiveSubject(savedSubject))
  ))
);
