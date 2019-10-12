var database;
var ref;
var firebaseConfig;

// Your web app's Firebase configuration
firebaseConfig = {
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







  //ref = firebase.database().ref().child("messages");


function setup(){

  ref = firebase.database().ref("messages").on("value", gotData, errData);
  //ref.on('value', gotData, errData);
}

function gotData(data)
{
    //console.log(data.val());
    var scores = data.val();
    var keys = Object.keys(scores);
    console.log(keys);
    for( var i=0; i<keys.length; i++){
      var k = keys[i];
      var name = scores[k].name;
      var company = scores[k].company;
      var message = scores[k].message;
      //console.log(name, "\n", company,"\n\n", message);
      //var li = document.createElement('li', name + "\n" + company + "\n\n" + message);
      //li.parent('infoshow');


      document.write("Name: " + name + "<br>Institute: " + company +  "<br>Message: " + message + "<br>" + "<br>");
    }
}

function setupjobs(){

  ref = firebase.database().ref("addjob").on("value", gotDataJ, errData);
  //ref.on('value', gotData, errData);
}

function gotDataJ(data)
{
    //console.log(data.val());
    var scores = data.val();
    var keys = Object.keys(scores);
    console.log(keys);
    for( var i=0; i<keys.length; i++){
      var k = keys[i];
      var sit = scores[k].sit;
      var type = scores[k].type;
      var link = scores[k].link;
      //console.log(name, "\n", company,"\n\n", message);
      //var li = document.createElement('li', name + "\n" + company + "\n\n" + message);
      //li.parent('infoshow');


      document.write("Post: " + sit + "<br>Type: " + type +  "<br>Link: " + link + "<br>" + "<br>");
    }
}

function errData(err){
  console.log('Error!');
  console.log(err);
}
