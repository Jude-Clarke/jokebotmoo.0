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
    keyWords:"farmer's hands were cold"
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
  }
    ];

function tellJoke(){
  var randomJoke = Math.round(Math.random() * 8);
  if(confirm("Hello, wanna hear a joke?")){
    var answer = jokes[randomJoke].answer;
    var response = prompt(jokes[randomJoke].joke);
    var keyWords = jokes[randomJoke].keyWords;
    if(response.toLowerCase().includes(answer.toLowerCase()) || response.toLowerCase().includes(keyWords.toLowerCase())){
      alert("That's right! How did you know?");
    } else {
      alert("Wrong!")
      alert(answer);
    }
  }
};

// tellJoke();








$(window).ready(function(){
$(".boton").wrapInner('<div class=botontext></div>');
    
    $(".botontext").clone().appendTo( $(".boton") );
    
    $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
    
    $(".twist").css("width", "25%").css("width", "+=3px");
});
