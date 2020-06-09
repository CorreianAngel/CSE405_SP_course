//Firestore adding Data code
const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const age = document.getElementById('ageNumber');
const enterBtn = document.getElementById('enterBtn');

const database = firebase.firestore();
const userList = database.collection('users');

enterBtn.addEventListener('click', e =>
{
   e.preventDefault();
   userList.doc(userId.value).set({
     first_name: firstName.value,
     age: age.value

   })
    .then(() => {console.log('Data written Successfully');})
    .catch(error => {console.error(error)});
});
//Firebase authentication code here
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "initial";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    if(user != null)
    {
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome : " + email_id;
    }

  } else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "initial";
  }
});

function login()
{
  
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;
 

firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error :" + errorMessage);

  // ...
 });
}

function signup()
{
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;
 

 firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error :" + errorMessage);
  console.log("Button Clicked.");
  // ...
});
}

function logout()
{
   firebase.auth().signOut();
   console.log("Button Clicked.");
}

