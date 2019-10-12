// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCL48XTKJ1Fz9kW6tmK4gyI5I9RDhmJZLk",
    authDomain: "flexijobhorizon.firebaseapp.com",
    databaseURL: "https://flexijobhorizon.firebaseio.com",
    projectId: "flexijobhorizon",
    storageBucket: "",
    messagingSenderId: "732503714973",
    appId: "1:732503714973:web:3c2b563f841868d700f874"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //make auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();

  // update firestore settings
  db.settings({ timestampsInSnapshots: true});

  var w;
  auth.onAuthStateChanged(user => {
    console.log(user);

    w = user;

  if(user){

    if(user.email=="a@a.com")
    {
      console.log("its admin");
      document.getElementById("post").style.display = 'none';
      document.getElementById("jobs").style.display = 'none';
      document.getElementById("up").style.display = 'none';
      document.getElementById("in").style.display = 'none';
      document.getElementById("welcome").style.display = 'none';

    }
    else{

      console.log("id exists but not admin");
      //document.getElementById("drop").style.display = 'block';
      document.getElementById("admin").style.display = 'none';
      document.getElementById("up").style.display = 'none';
      document.getElementById("in").style.display = 'none';
      document.getElementById("welcome").style.display = 'none';  //

    }
  }
    else{
        console.log("no user signed in");

        document.getElementById("logout").style.display = 'none';
        document.getElementById("jobs").style.display = 'none';
        document.getElementById("admin").style.display = 'none';

    }

  })

  function decide()
  {
    if(w)
    {
      setTimeout(function(){
        document.location.href="./jobs.html";
      },0);
    }
    else {
      alert("YOU MUST BE SIGNED IN FIRST !");
    }
  }



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);
  console.log("done");
  alert("Your message have been sent");
  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },10);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
