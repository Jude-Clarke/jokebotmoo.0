var jokes = [
  {
    joke:"Where do you find a cow with no legs?",
    answer:"You find her right where you left her",
    keyWords: "where you left"    
  },
  {
    joke:"What do you call a cow with no legs?",
    answer:"ground beef",
    keyWords:"groundbeef"
  },
  {
    joke:"How do you get a cow with no legs?",
    answer:"Cut its legs off",
    keyWords:"cut her legs off"
  },
  {
    joke:"Why do cows have hooves instead of feet?",
    answer:"They lactose",
    keyWords:"lack toes"
  },
  {
    joke:"Why did the cow jump over the moon?",
    answer:"Because the farmer's hands were cold",
    keyWords:"cold"
  },
  {
    joke:"What does a farmer talk about when she’s milking a cow?",
    answer:"Udder nonsense",
    keyWords:"udder nonsense"
  },
  {
    joke:"Why did the Secret Service surround the president with dozens of cows?",
    answer:"Because they were trying to beef up security!",
    keyWords:"beef up"
  },
  {
    joke:"What happens when a cow laughs?",
    answer:"Milk comes out of its nose",
    keyWords:"milk"
  },
  {
    joke:"What do you call a cow in an earthquake?",
    answer:"A milkshake!",
    keyWords:"milkshake"
  },
  {
    joke:"What do you call it when one cow spies on another cow?",
    answer:"A steak out",
    keyWords:"steak out"
  },
  {
    joke:"How do farmers count their cows?",
    answer:"They use a cowculator!",
    keyWords:"cowculator"
  },
  {
    joke:"What happens when you talk to a cow?",
    answer:"It goes in one ear and out the udder",
    keyWords:"out the udder"
  },
  {
    joke:"Why did the two cows hate each other?",
    answer:"They had beef",
    keyWords:"beef"
  },
  {
    joke:"What did the bull say to his son when he was going off to school?",
    answer:"Bison!",
    keyWords:"bison"
  },
  {
    joke:"Why do cows wear bells?",
    answer:"Their horns don't work.",
    keyWords:"horns"
  },
  {
    joke:"What are cow knees called?",
    answer:"Burger joints.",
    keyWords:"burger joints"
  }
    ];

var skill = 0;
respect = ["You win. You know everything!", "I give up. How do you know all of these?", "There's no way you're not hacking!", "Kinda sus how you knew that one."]
var defeat;
var correct;
var firstClick = true;
var randomJoke = 0;
var prevJoke = 0;

function begin(){
  if(firstClick){
     if(confirm("Hello, wanna hear a joke?")){
      firstClick = false;
      tellJoke();
    }
  } else {
    tellJoke();
  }
};

  function tellJoke(){
    do {
      var randomJoke = Math.round(Math.random() * jokes.length);
    }
    while(randomJoke === prevJoke);
    
    var answer = jokes[randomJoke].answer;
    var response = prompt(jokes[randomJoke].joke);
    var keyWords = jokes[randomJoke].keyWords;
    if(response.toLowerCase().includes(answer.toLowerCase()) || response.toLowerCase().includes(keyWords.toLowerCase())){
      defeat = respect[Math.round(Math.random() * respect.length)];
      correct = ["That's right! How did you know?", "Again? You gotta be kidding me!", "Hey, you're pretty good at this!", "Ok, you must be hacking.", "HACKER!", defeat];
      alert(correct[skill]);
      if(skill < correct.length -1){
        skill += 1;
      };
    } else {
      if((!response.toLowerCase().includes("idk") || !response.toLowerCase().includes("why")) || !response.toLowerCase().includes("t know")){
         alert("Wrong!");
         };
      skill -=1;
      alert(answer);
    }
  }


// tellJoke();








$(window).ready(function(){
$(".boton").wrapInner('<div class=botontext></div>');
    
    $(".botontext").clone().appendTo( $(".boton") );
    
    $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
    
    $(".twist").css("width", "25%").css("width", "+=3px");
});
