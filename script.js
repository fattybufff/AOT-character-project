let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector(".button");
let attack = document.querySelector(".attack");
let text = document.querySelector(".text");
let x = document.querySelector(".x");






button.onclick = function (){
 alert("button check");
  
 let answer1 = input1.value;
  alert(answer1);
  let answer2 = input2.value;
  alert(answer2);

    if(answer1 === "attack" && answer2 === "eldian"){
      alert("Eren's attack titan");
        x.src = "Eren.png";
          text.innerHTML = "Eren's Attack Titan";

    }else if (answer1 === "colossus" && answer2 === "eldian"){
      alert("Armin's colossus titan")
        x.src = "Armin.png";
          text.innerHTML = "Armin's Colossus Titan";

    }else if (answer1 === "colossus" && answer2 === "marlian"){
      alert("bertholdt's colossus titan")
        x.src = "bertholdt.png";
          text.innerHTML = "Bertholt's Colossus Titan";

    }else if (answer1 === "attack" && answer2 === "marlian"){
    console.log("Reiner's Armored Titan")
        x.src = "Reiner.png";
        text.innerHTML = "Reiner's Armored Titan";
    }
  };





  
  //  }else if (answer1 === "colossus" && answer2 === "marlian"){
  //   console.log("bertholdt's colossus titan")
  //  }

//    let attack = document.querySelector(".attack");




// let colossus = document.querySelector(".colossus");


// button.addEventListener("click", function () {
//   alert("colossus");
//   colossus.src = "armin.png";
//   text.innerHTML = "colossus titan";
// });

// let colosal = document.querySelector(".colosal");


// button.addEventListener("click", function () {
//   alert("colosal");
//   colosal.src = "bertholdt.png";
//   text.innerHTML = "colosal titan";
// });

// let armored = document.querySelector(".armored");

// button.addEventListener("click", function () {
//   alert("armored");
//   armored.src = "reiner.png";
//   text.innerHTML = "armored titan";
// });
