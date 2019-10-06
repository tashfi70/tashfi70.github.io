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



auth.onAuthStateChanged(user => {
  console.log(user);



  if(user){
    console.log("if loop sign");
      document.getElementById("divform").style.display = 'none';

      document.getElementById("em").innerHTML = user.email;

    	document.getElementById("out").style.display = 'block';
    	document.getElementById("divformout").style.display = 'block';


      //log out method
      const logout = document.querySelector('#logout');
      logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
        alert("LOGGED OUT!");
      });

        setTimeout(function(){
          document.location.href="./index.html";
        },3050);

      });

  }

  else{
    console.log("else loop sign");

    document.getElementById("divform").style.display = 'block';
    document.getElementById("out").style.display = 'none';
    document.getElementById("divformout").style.display = 'none';
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
      },3050);


    });



    //Login
    const loginform = document.querySelector('#form-login');
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
      },3050);
    });

  }

})
