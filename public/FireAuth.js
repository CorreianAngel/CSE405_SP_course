// JavaScript source code
/* FireStore database init code
var config =
	{
		
	};
	firebase.InitializeApp(config);
*/
//Dont have the proper firebase files yet for firebase.auth functions.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "initial";
    dovument.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;

    if(user != null)
    {
       var email_id = user.email;
       document.getElementById("user_para").innerHTML = "Welcome : " + email;    
    }
  } else {
    // No user is signed in.
     document.getElementById("user_div").style.display = "none";
    dovument.getElementById("login_div").style.display = "initial";
  }
});

function login()
{
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  window.alert(userEmail + " " + userPass); 
  //Dont have proper firebase files yet
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : " + errorMessage);
  // ...
 }); 

}


function logout()
{
 //Dont have proper firebase files yet
 firebase.auth().signOut()
}
