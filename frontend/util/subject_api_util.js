import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchSubjects = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/subjects`
  });
};

export const saveSubject = subject => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/subjects`,
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

export const SUBJECT_IMAGES = {
  'Agriculture and Food': require("./images/AgricultureandFood.jpg"),
  'Animal Rights and Wildlife Issues': require("./images/AnimalRights.jpg"),
  'Arts and Humanities': require("./images/Arts.jpg"),
  'Budget, Spending, and Taxes': require("./images/Budget.jpg"),
  'Business and Consumers': require("./images/Business.jpg"),
  'Campaign Finance and Election Issues': require("./images/ElectionIssues.jpg"),
  'Civil Liberties and Civil Rights': require("./images/Civilrights.jpg"),
  'Commerce': require("./images/Commerce.jpg"),
  'Crime': require("./images/Crime.jpg"),
  'Drugs': require("./images/Drugs.jpg"),
  'Education': require("./images/Education.jpg"),
  'Energy': require("./images/Energy.jpg"),
  'Environmental': require("./images/Environment.jpg"),
  'Executive Branch': require("./images/Executive.jpg"),
  'Family and Children Issues': require("./images/Family.jpg"),
  'Federal, State, and Local Relations': require("./images/Social2.jpg"),
  'Gambling and Gaming': require("./images/Gambling.jpg"),
  'Government Reform': require("./images/Governmentreform.jpg"),
  'Guns': require("./images/Guns.jpg"),
  'Health': require("./images/Health.jpg"),
  'Housing and Property': require("./images/Housing.jpg"),
  'Immigration': require("./images/Immigration.jpg"),
  'Indigenous Peoples': require("./images/IndigenousPeoples.jpg"),
  'Insurance': require("./images/Insurance.jpg"),
  'Judiciary': require("./images/Judiciary.jpg"),
  'Labor and Employment': require("./images/Labor.jpg"),
  'Legal Issues': require("./images/Legal.jpg"),
  'Legislative Affairs': require("./images/LegislativeAffairs.jpg"),
  'Military': require("./images/Military.jpg"),
  'Municipal and County Issues': require("./images/Municipal.jpg"),
  'Nominations': require("./images/Nominations.jpg"),
  'Other': require("./images/Other.jpg"),
  'Public Services': require("./images/PublicService.jpg"),
  'Recreation': require("./images/Recreation.jpg"),
  'Reproductive Issues': require("./images/Reproductive.jpg"),
  'Resolutions': require("./images/Resolutions.jpg"),
  'Science and Medical Research': require("./images/Science.jpg"),
  'Senior Issues': require("./images/Senior.jpg"),
  'Sexual Orientation and Gender Issues': require("./images/SexualOrientation.jpg"),
  'Social Issues': require("./images/Social.jpg"),
  'State Agencies': require("./images/StateAgency.jpg"),
  'Technology and Communication': require("./images/Technology.jpg"),
  'Trade': require("./images/Trade.jpg"),
  'Transportation': require("./images/PublicTransit.jpg"),
  'Welfare and Poverty': require("./images/Welfare.jpg")
};
