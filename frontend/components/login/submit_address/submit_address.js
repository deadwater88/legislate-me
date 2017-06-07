import React from 'react';
import { TextInput, Button } from 'react-native';
class SubmitAddress extends React.Component {

  constructor(){
    this.state = {text: ""};
  }
  render(){
    return(
    <form>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    </form>);
  }
}

export default SubmitAddress;
