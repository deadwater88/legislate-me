import { values } from 'lodash';
export const parseRepresentatives = (representatives) => values(representatives);

export const zipped = (subjects) => {
  let zippedArray = [];
  Object.keys(subjects).forEach((key) => {
    const value = subjects[key];
    zippedArray.push([key, value]);
  });
  return zippedArray;
};
