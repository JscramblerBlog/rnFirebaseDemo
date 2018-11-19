import Firebase from 'firebase';
let config = {
	apiKey: 'AIzaSyBNVGTSNprnxeECDP8IP3HvbLSL0qK0FYk',
	authDomain: 'rnfirebase-e2de1.firebaseapp.com',
	databaseURL: 'https://rnfirebase-e2de1.firebaseio.com',
	projectId: 'rnfirebase-e2de1',
	storageBucket: 'rnfirebase-e2de1.appspot.com',
	messagingSenderId: '670572703564'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
