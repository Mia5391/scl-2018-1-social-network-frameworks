import firebase from 'firebase'; 

var config = {
    apiKey: "AIzaSyBcmmsGM5IG_3LohKtjByz1gXic-JnwYjU",
    authDomain: "sechat-social-network.firebaseapp.com",
    databaseURL: "https://sechat-social-network.firebaseio.com",
    projectId: "sechat-social-network",
    storageBucket: "sechat-social-network.appspot.com",
    messagingSenderId: "152011398688"
  };
  const firebaseIntegration = firebase.initializeApp(config);

  export default firebaseIntegration; 