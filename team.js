// function splitWords() {
//   let quote = document.querySelector("blockquote q");
//   quote.innerText.replace(/(<([^>]+)>)/gi, "");
//   (quotewords = quote.innerText.split(" ")), (wordCount = quotewords.length);
//   quote.innerHTML = "";
//   for (let i = 0; i < wordCount; i++) {
//     quote.innerHTML += "<span>" + quotewords[i] + "</span>";
//     if (i < quotewords.length - 1) {
//       quote.innerHTML += " ";
//     }
//   }
//   quotewords = document.querySelectorAll("blockquote q span");
//   fadeWords(quotewords);
// }

// function getRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function fadeWords(quotewords) {
//   Array.prototype.forEach.call(quotewords, function (word) {
//     let animate = word.animate(
//       [
//         {
//           opacity: 0,
//           filter: "blur(" + getRandom(2, 5) + "px)",
//         },
//         {
//           opacity: 1,
//           filter: "blur(0px)",
//         },
//       ],
//       {
//         duration: 1000,
//         delay: getRandom(500, 3300),
//         fill: "forwards",
//       }
//     );
//   });
// }

// splitWords();

var myButton = document.querySelector(".learnBtn");
var text2toggle = document.querySelector(".non_visible_text");

myButton.addEventListener("click", function () {
  if (myButton.textContent === "Agenda") {
    text2toggle.style.display = "block";
    myButton.textContent = "see less";
  } else {
    text2toggle.style.display = "none";
    myButton.textContent = "see more";
  }
});
