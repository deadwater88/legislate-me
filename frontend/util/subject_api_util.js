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
    method: 'PATCH',
    url: `${HOST_URL}/api/users/subjects`,
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
  'Agriculture and Food': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Animal Rights and Wildlife Issues': "https://static.pexels.com/photos/71141/pexels-photo-71141.jpeg",
  'Arts and Humanities': "https://static.pexels.com/photos/253682/pexels-photo-253682.jpeg",
  'Budget, Spending, and Taxes': "https://static.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg",
  'Business and Consumers': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Campaign Finance and Election Issues': "https://static.pexels.com/photos/159353/survey-opinion-research-voting-fill-159353.jpeg",
  'Civil Liberties and Civil Rights': "https://static.pexels.com/photos/38888/pexels-photo-38888.jpeg",
  'Commerce': "https://static.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg",
  'Crime': "https://static.pexels.com/photos/38904/pexels-photo-38904.jpeg",
  'Drugs': "https://static.pexels.com/photos/39522/apothecary-pharmacy-chemist-mortar-and-pestle-39522.jpeg",
  'Education': "https://static.pexels.com/photos/203237/pexels-photo-203237.jpeg",
  'Energy': "https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg",
  'Environmental': "https://static.pexels.com/photos/388065/pexels-photo-388065.jpeg",
  'Executive Branch': "https://static.pexels.com/photos/129112/pexels-photo-129112.jpeg",
  'Family and Children Issues': "https://static.pexels.com/photos/34014/pexels-photo.jpg",
  'Federal, State, and Local Relations': "https://static.pexels.com/photos/1440/city-road-street-buildings.jpg",
  'Gambling and Gaming': "https://static.pexels.com/photos/131200/pexels-photo-131200.jpeg",
  'Government Reform': "https://static.pexels.com/photos/197309/pexels-photo-197309.jpeg",
  'Guns': "https://static.pexels.com/photos/370202/gun-revolver-fire-firing-370202.jpeg",
  'Health': "https://static.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg",
  'Housing and Property': "https://static.pexels.com/photos/36366/pexels-photo.jpg",
  'Immigration': "https://static.pexels.com/photos/60003/statue-of-liberty-new-york-ny-nyc-60003.jpeg",
  'Indigenous Peoples': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Insurance': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Judiciary': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Labor and Employment': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Legal Issues': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Legislative Affairs': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Military': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Municipal and County Issues': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Nominations': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Other': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Public Services': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Recreation': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Reproductive Issues': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Resolutions': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Science and Medical Research': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Senior Issues': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Sexual Orientation and Gender Issues': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Social Issues': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'State Agencies': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Technology and Communication': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Trade': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Transportation': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg",
  'Welfare and Poverty': "https://static.pexels.com/photos/175389/pexels-photo-175389.jpeg"
};
