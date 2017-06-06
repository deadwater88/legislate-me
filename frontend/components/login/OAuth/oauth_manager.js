import OAuthManager from 'react-native-oauth';
const Manager = new OAuthManager('LegislateMe');
Manager.configure({
  google: {
    callback_url: `io.fullstack.FirestackExample:/oauth2redirect`,
    client_id: '348685641716-nfrbuehmmo75d9asaav74q7u6f9hgoe6.apps.googleusercontent.com',
    client_secret: 'rIgDcIV1MLxdl3Pm4NQ6mi-_'
  }
});

// ...
Manager.authorize('google', {scopes: 'profile email'})
.then(resp => console.log('Your users ID'))
.catch(err => console.log('There was an error'));

export default Manager;
