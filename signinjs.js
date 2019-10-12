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



    //Login
    const loginform = document.querySelector('#form_signin');
    loginform.addEventListener('submit', (e) => {
      e.preventDefault();

      //get user loginform
      const email = loginform['inputemail'].value;
      const password = loginform['inputPassword'].value;

      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  alert("Account does not exist. Try again or sign up.");
}).then(cred => {
        console.log(cred.user);
        alert("SUCCESSFULLY LOGGED IN!");
        loginform.reset();


              setTimeout(function(){
                document.location.href="./index.html";
              },10);
      });

      //redirect to home page

    });
