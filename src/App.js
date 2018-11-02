import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvmgU62Btg9dYfNtgm1jKEjVGpWuHSOSo',
      authDomain: 'auth-3b3e0.firebaseapp.com',
      databaseURL: 'https://auth-3b3e0.firebaseio.com',
      projectId: 'auth-3b3e0',
      storageBucket: 'auth-3b3e0.appspot.com',
      messagingSenderId: '888353781796'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
