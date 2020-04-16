function startQuiz()
{
   console.log("Button Pressed. First question generated."); 
   var JSON = 
   {
       q: "This is a test question, did it work?",
       option1: "yes",
       option2: "no",
       answer: "yes"
   };
   var questions = JSON.q;
   var answer = JSON.option1;
   var answer2 = JSON.option2;
   document.getElementById("question").innerHTML = questions;
   document.getElementById("optt1").innerHTML = answer;
   document.getElementById("optt2").innerHTML = answer2;
}



