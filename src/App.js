import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvmgU62Btg9dYfNtgm1jKEjVGpWuHSOSo',
      authDomain: 'auth-3b3e0.firebaseapp.com',
      databaseURL: 'https://auth-3b3e0.firebaseio.com',
      projectId: 'auth-3b3e0',
      storageBucket: 'auth-3b3e0.appspot.com',
      messagingSenderId: '888353781796'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row'
  }
};
export default App;
