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

    // signup
    const signupform = document.querySelector('#form_signup');
    signupform.addEventListener('submit', (e) => {
      e.preventDefault();



      //get user signupform
      const email = signupform['inputemail'].value
      const password = signupform['inputPassword'].value;

      console.log(email, password);
      // signup the user
      auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        alert("SUCCESSFULLY SIGNED IN!");
        signupform.reset();


              setTimeout(function(){
                document.location.href="./index.html";
              },10);
      });



      //redirect to home page



    });
