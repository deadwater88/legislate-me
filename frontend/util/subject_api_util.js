import axios from 'axios';
export const fetchSubjects = () => {
  return axios({
    method: 'GET',
    url: 'api/subjects'
  });
};

export const saveSubject = subject => {
  return axios({
    method: 'POST',
    url: 'api/subjects',
    data: subject
  });
};

export const SUBJECTS = {
  'Agriculture and Food': false,
  'Animal Rights and Wildlife Issues': false,
  'Arts and Humanities': false,
  'Budget, Spending, and Taxes': false,
  'Business and Consumers': false,
  'Campaign Finance and Election Issues': false,
  'Civil Liberties and Civil Rights': false,
  'Commerce': false,
  'Crime': false,
  'Drugs': false,
  'Education': false,
  'Energy': false,
  'Environmental': false,
  'Executive Branch': false,
  'Family and Children Issues': false,
  'Federal, State, and Local Relations': false,
  'Gambling and Gaming': false,
  'Government Reform': false,
  'Guns': false,
  'Health': false,
  'Housing and Property': false,
  'Immigration': false,
  'Indigenous Peoples': false,
  'Insurance': false,
  'Judiciary': false,
  'Labor and Employment': false,
  'Legal Issues': false,
  'Legislative Affairs': false,
  'Military': false,
  'Municipal and County Issues': false,
  'Nominations': false,
  'Other': false,
  'Public Services': false,
  'Recreation': false,
  'Reproductive Issues': false,
  'Resolutions': false,
  'Science and Medical Research': false,
  'Senior Issues': false,
  'Sexual Orientation and Gender Issues': false,
  'Social Issues': false,
  'State Agencies': false,
  'Technology and Communication': false,
  'Trade': false,
  'Transportation': false,
  'Welfare and Poverty': false
};
