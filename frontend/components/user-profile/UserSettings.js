import React from 'react';
import { Button, Card, CardSection } from '../common';

class UserSettings extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Button>
            Sign out
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Delete your account
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default UserSettings;
