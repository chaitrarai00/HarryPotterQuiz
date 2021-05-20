var readlinesync=require("readline-sync");
var score=0;
var user_answer;
var questions_Collection=[{question:`How does Harry first learn that he is a wizard?
a.The Dursleys tell him when he is eight
b.Dudley accidentally lets it slip
c.Hagrid has to track him down to tell him
d.He reads about it in the Daily Prophet`,
answer:"c"},
{question:`Where does Harry live in the Dursley’s home?
a.With Dudley
b.In the guest house
c.In Mr. and Mrs. Dursley’s room
d.In a cupboard under the stairs`,
answer:"d"},
{question:`How do the children get rid of Hagrid’s dragon?
a.They poison it
b.They bring it up to the top of the tallest tower and push it off
c.They bring it up to the top of the tallest tower and give it to Ron’s older brother’s friends
d.They bring it up to the top of the tallest tower and give it to Voldemort`,
answer:"c"},
{question:`What is significant about the day of the Gringotts break-in?
a.It occurs on Harry’s birthday
b.Harry is at Gringotts earlier the same day
c.Hagrid empties vault seven hundred and thirteen
d.All of the above`,
answer:"d"},
{question:`To whom does the Sorcerer’s Stone belong?
a.Nicolas Flamel
b.Dumbledore
c.Voldemort
d.Harry`,
answer:"a"},
{question:`What does Voldemort drink in the Forbidden Forest to sustain himself?
a.Apple nectar
b.Unicorn blood
c.Sacred water
d.Cedar sap`,
answer:"c"}];

for(var i=0;i<questions_Collection.length;i++){
  var question_now=questions_Collection[i];
  quiz(question_now.question,question_now.answer)
}

function quiz(question,answer){
  user_answer=readlinesync.question(question);
  if(user_answer===answer){
    console.log("You are right!!!");
    score++;
  }else{
    console.log("Oopss!!! you got that wrong");
  }
}

console.log("You have scored "+score+" points");