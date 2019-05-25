import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBITiWrSTUN9SQ-hZsSAbXFwSeJZkDY-Ck",
  authDomain: "find-me-1541257258317.firebaseapp.com",
  databaseURL: "https://find-me-1541257258317.firebaseio.com",
  projectId: "find-me-1541257258317",
  storageBucket: "find-me-1541257258317.appspot.com",
  messagingSenderId: "765700871740",
  appId: "1:765700871740:web:8801c30415a6a7a8"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseUsers = firebaseDB.ref('url');


const firebaselooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=> {
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data
}

export {
    firebase,
    firebaseDB,
    firebaseUsers,

    firebaselooper
}
