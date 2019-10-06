// Your web app's Firebase configuration
  var firebaseConfig = {
  apiKey: "AIzaSyCL48XTKJ1Fz9kW6tmK4gyI5I9RDhmJZLk",
  authDomain: "flexijobhorizon.firebaseapp.com",
  databaseURL: "https://flexijobhorizon.firebaseio.com",
  projectId: "flexijobhorizon",
  appId: "1:732503714973:web:3c2b563f841868d700f874"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true});




auth.onAuthStateChanged(user => {
  console.log(user);



  if(user){
    console.log("if loop foruser");

    document.getElementById("drop").style.display = 'block';

  }

  else{
    console.log("else loop foruser");

    document.getElementById("drop").style.display = 'none';

  }

})
