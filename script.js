let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");

button.onclick = function(){
    alert("button check");

  let answer1 = input1.value;
alert(answer1);
  let answer2 = input2.value;
alert(answer2);

  if(answer1 === "attack" && answer2 === "eldian"){
     console.log("Eren's attack titan")
  }else if (answer1 === "colossus" && answer2 === "eldian"){
    console.log("Armin's colossus titan")
  }else if (answer1 === "attack" && answer2 === "marlian"){
    console.log("Reiner's armored titan")
   }else if (answer1 === "colossus" && answer2 === "marlian"){
    console.log("bertholdt's colossus titan")
   }

   let attack = document.querySelector(".picture");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("work");
  attack.src = "eren.png";
});

};