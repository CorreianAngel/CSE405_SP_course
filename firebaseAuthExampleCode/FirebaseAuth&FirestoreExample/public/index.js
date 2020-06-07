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
function logout()
{
   firebase.auth().signOut();
   console.log("Button Clicked.");
}

