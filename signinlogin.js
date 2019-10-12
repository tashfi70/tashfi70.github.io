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
    console.log("if loop sign");

    if(user.email=="a@a.com")
    {
      console.log("its admin");
      //document.getElementById("drop").style.display = 'block';
      document.getElementById("jobs").style.display = 'none';
      document.getElementById("post").style.display = 'none';

    }
    else {
      document.getElementById("admin").style.display = 'none';
    }

    //document.getElementById("drop").style.display = 'block';
      document.getElementById("em").innerHTML = user.email;
      
      //log out method
      const logout = document.querySelector('#logout');
      logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
        alert("LOGGED OUT!");
      });

        setTimeout(function(){
          document.location.href="./index.html";
        },10);

      });

  }

  else{
    console.log("else loop sign");
    // signup
    const signupform = document.querySelector('#form_signin');
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
      });



      //redirect to home page

      setTimeout(function(){
        document.location.href="./index.html";
      },10);


    });



    //Login
    const loginform = document.querySelector('#form_login');
    loginform.addEventListener('submit', (e) => {
      e.preventDefault();

      //get user loginform
      const email = loginform['inputemail'].value;
      const password = loginform['inputPassword'].value;

      auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        alert("SUCCESSFULLY LOGGED IN!");
        loginform.reset();
      });

      //redirect to home page

      setTimeout(function(){
        document.location.href="./index.html";
      },10);
    });

  }

})
