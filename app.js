var firebaseConfig = {
  apiKey: "AIzaSyAKBEtUkoVuiL_5ftb_KC8Bb-PDb-g6rMM",
  authDomain: "chat-web-20eef.firebaseapp.com",
  databaseURL: "https://chat-web-20eef-default-rtdb.firebaseio.com",
  projectId: "chat-web-20eef",
  storageBucket: "chat-web-20eef.appspot.com",
  messagingSenderId: "1092423367769",
  appId: "1:1092423367769:web:b79064d32c29682dac4548"
};

firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log(Room_names)
  row= "<div id=" +  Room_names  + " onclick='redirectToNewChatPage(this.id) ' > # "  + Room_names +"</div> <hr>"
  console.log(row)
  document.getElementById("output").innerHTML +=row
  //End code
  });});}
  getData();


function login() {
    user_name = document.getElementById("user_name").value
    subject_name = document.getElementById("subject_name").value
    room_name = document.getElementById("room_name").value
    document.getElementById("share").style.display="block"

    firebase.database().ref("/").child(room_name).update

   ({
   purpose:"adding new user",
   subject_name:subject_name
   })
   localStorage.setItem("user_name", user_name)
    localStorage.setItem("subject_name", subject_name)
    localStorage.setItem("room_name", room_name)
}

function send() {
    user_name_fetch = localStorage.getItem("user_name")
    subject_name_fetch= localStorage.getItem("subject_name")
    room_name_fetch = localStorage.getItem("room_name")
    a = "mailto:EnterYourGroupName@gmail.com?body=Your " + subject_name_fetch + " Teacher " + user_name_fetch +  " Requesting to you join the chat Session by Open APNA CHAT website. "+   "Enter Room name = " + room_name_fetch
    document.getElementById("share").href = a
}
function redirectToNewChatPage(room){
  window.location="chat.html"
  }