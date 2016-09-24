import React, {Component} from 'react';

import {Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import ButtonStyles from '../views/loginView/ButtonStyles'

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {user: null }
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render(){
    if(!this.state.user){
      let _this = this;
      return (
        <View style={ButtonStyles.container}>
            <FBLogin style={ButtonStyles.loginFBButton}
              ref={(fbLogin) => { this.fbLogin = fbLogin }}
              permissions={["email","user_friends"]}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              onLogin={function(data){
                console.log("Logged in!");
                console.log(data);
                _this.setState({ user : data.credentials });
              }}
              onLogout={function(){
                console.log("Logged out.");
                _this.setState({ user : null });
              }}
              onLoginFound={function(data){
                console.log("Existing login found.");
                console.log(data);
                _this.setState({ user : data.credentials });
              }}
              onLoginNotFound={function(){
                console.log("No user logged in.");
                _this.setState({ user : null });
              }}
              onError={function(data){
                console.log("ERROR");
                console.log(data);
              }}
              onCancel={function(){
                console.log("User cancelled.");
              }}
              onPermissionsMissing={function(data){
                console.log("Check permissions!");
                console.log(data);
              }}
            />
          <GoogleSigninButton
            style={ButtonStyles.loginGGButton}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Light}
            onPress={this._signIn.bind(this)}
            />
        </View>
      )
    }
    if(this.state.user){
      return(
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
          Welcome {this.state.user.name}
          </Text>
          <Text>Your email is: {this.state.user.email}</Text>

          <TouchableOpacity onPress={() => {this._signOut(); }}>
            <View style={{marginTop: 50}}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        // scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        iosClientId: '57555418851-vqbbma9aqlkkbtsn92alf6qm6rubq93j.apps.googleusercontent.com',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }
}
