
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDF6vez6qmfEUDi_1X6fNVQ-_CFSD0JNB4",
      authDomain: "practice-60cc9.firebaseapp.com",
      databaseURL: "https://practice-60cc9-default-rtdb.firebaseio.com",
      projectId: "practice-60cc9",
      storageBucket: "practice-60cc9.appspot.com",
      messagingSenderId: "128418128890",
      appId: "1:128418128890:web:35e32e8a6e6c1747823a43",
      measurementId: "G-CVP598LXQ3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
