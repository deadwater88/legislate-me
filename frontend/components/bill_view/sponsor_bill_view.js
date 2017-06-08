import React from 'react';
import RepresentativesView from '../user_profile/RepresentativesView';

const SponsorBillView = ({sponsors}) => {
  return(
    <RepresentativesView reps={sponsors}/>
  );
};

export default SponsorBillView;
