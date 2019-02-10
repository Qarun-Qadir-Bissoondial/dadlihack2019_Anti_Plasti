import app from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBXA1hmMAA5p8eYk1KwXrgYQsdAk0ehnKI",
    authDomain: "anti-plasti.firebaseapp.com",
    databaseURL: "https://anti-plasti.firebaseio.com",
    projectId: "anti-plasti",
    storageBucket: "anti-plasti.appspot.com",
    messagingSenderId: "342720767537"
};

class FirebaseInstance {
    fb_app;
    constructor() {
        if (!app.apps.length) {
            this.fb_app = app.initializeApp(config);
        } else {
            this.fb_app = app.apps[0];
        }
    }

    get_db() {
        return this.fb_app.database();
    }
}

export default FirebaseInstance;
