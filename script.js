"strict mode";
let moveLeft = document.querySelector(".content__right");
const buttonTop = document.getElementsByClassName("arrow__top--btn");
const primes = document.getElementById("right__id");
let randomNumberX = Math.floor(Math.random() * 400) - 200;
let randomNumberY = Math.floor(Math.random() * 400) - 200;
const randomButton = document.getElementById("randomButton");

// x = 23;
// console.log(x);

function randomPosition() {
  randomButton.addEventListener("click", function () {
    const primes = document.getElementById("right__id");

    primes.style.transform = `translate(
      ${randomNumberX}px,
      ${randomNumberY}px
    )`;
    randomNumberX = Math.floor(Math.random() * 400) - 200;
    randomNumberY = Math.floor(Math.random() * 400) - 200;
    console.log(randomNumberX, randomNumberY);
    function won() {
      if (randomNumberX > 120 && randomNumberY > 120) {
        alert("Not a valid position");
      }
    }
    won();
  });
}
randomPosition();
let drag = document
  .querySelector(".grid__botright")
  .setAttribute("draggable", true);

window.addEventListener("scroll", function () {
  const botLeftRed = document.querySelector(".grid__botleft");
  let offset = window.pageYOffset;
  // console.log(offset);
  if (offset < 220 && offset > 10) {
    botLeftRed.style.transform = `translate(
      0,
      -100px
    )`;
    botLeftRed.setAttribute("draggable", "true");

    botLeftRed.style.opacity = 1;
  } else {
    botLeftRed.style.transform = `translate(
      500px, -100px
    )`;
    botLeftRed.style.opacity = 0.1;
  }
});
// window.addEventListener("click", function () {
//   let theme = document.getElementsByClassName("theme");
// });
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let dark = document.querySelector("dark");
  if (offset > 400 && offset < 1000) {
    document.body.classList.add("dark");
    dark.style.transition = `${0.5}s ease`;
  } else {
    document.body.classList.remove("dark");
  }
});
window.addEventListener("scroll", function () {
  let prime = document.querySelector(".content__right");
  let offset = window.pageYOffset;
  if (offset > 670) {
    prime.style.transform = `translate(
      800px,
      0
    )`;
    prime.style.opacity = 0;
  } else if (offset < 300) {
    prime.style.transform = `translate(
      0,
      0
    )`;
    prime.style.opacity = 1;
  }
});

/////

// buttonLeft.addEventListener("click", function () {
//   let moveLeft = document.getElementById("right__id");
//   if ((buttonLeft = this.click)) {
//     moveLeft.style.transform = `translate(
//       100px,
//       0
//     )`;
//   }
// });
// window.addEventListener("keydown", function (ev) {
//   let moveLeft = document.querySelector(".content__right");
//   if (ev.key == 37) {
//     moveLeft.style.transform = `translate(
//       100px,
//       500px
//     )`;
//     console.log(moveLeft);
//   }
// });

// let stepT = 0;
// let stepL = 0;
// let stepR = 0;
// let stepB = 0;
let corX = 0;
let corY = 0;
function checkPosition() {
  let prime = document.querySelector(".content__right");
  if (corX > 200 || corY > 200) {
    window.alert("you've left allowed content");
  } else if (corX < -200 || corY < -200) {
    window.alert("you've also left it but from other side");
  } else if (corX > -50 && corX < 50) {
    prime.style.backgroundColor = "red";
  } else {
    console.log(corY, corX);
    prime.style.backgroundColor = "#fa7353";
  }
}
function moveTop() {
  const buttonTop = document.getElementById("btnT");
  buttonTop.addEventListener("click", function () {
    primes.style.transform = `translate(
          ${corY}px,
          ${corX}px
        )`;
    corX = corX - 5;
    checkPosition();
  });
}
moveTop();
function moveDown() {
  const btnDn = document.getElementById("btnDn");
  btnDn.addEventListener("click", function () {
    primes.style.transform = `translate(${corY}px,          ${corX}px)`;
    corX = corX + 5;
  });
  checkPosition();
}
moveDown();
function moveleft() {
  const buttonL = document.getElementById("arrow__left");
  buttonL.addEventListener("click", function () {
    primes.style.transform = `translate(          ${corY}px,
        ${corX}px
      )`;
    corY = corY - 5;
    checkPosition();
    // let step = 0;
    // if ((buttonL = true)) {
    //   return (step = step + 5);
    // }
    // console.log(step);
  });
}

moveleft();
const buttonR = document.getElementById("btnR");

function moveRight() {
  const buttonR = document.getElementById("btnR");
  // if ((primes.style.transform = `translateX(${stepR}px)` > 200)) {
  //   primes.style.transform = `translateX(10px)`;
  // }
  buttonR.addEventListener("click", function () {
    primes.style.transform = `translate(          ${corY}px,${corX}px)`;
    corY = corY + 5;
    // console.log(step);
    checkPosition();
  });
}
moveRight();

// buttonR.addEventListener("keydown", function (e) {
//   if (e.key == 87) {
//     moveTop();
//     console.log("moveTop");
//   }
// });

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    primes.style.transform = `translate(
      ${corY}px,
      ${corX}px
    )`;
    corX = corX - 5;
  }
  if (event.key == "ArrowDown") {
    primes.style.transform = `translate(
      ${corY}px,
      ${corX}px
    )`;
    corX = corX + 5;
  }
  if (event.key == "ArrowLeft") {
    primes.style.transform = `translate(
      ${corY}px,
      ${corX}px
    )`;
    corY = corY - 5;
  }
  if (event.key == "ArrowRight") {
    primes.style.transform = `translate(
      ${corY}px,
      ${corX}px
    )`;
    corY = corY + 5;
  }
});
// window.addEventListener("keydown", function (e) {
//  let arrowUp = e.
// });
// switch (e.code) {
//   case "ArrowDown":
//     moveDown();
//     break;
//   case "ArrowUp":
//     moveTop();
//     break;
//   case "ArrowRight":
//     moveRight();
//     break;
//   case "ArrowLeft":
//     moveLeft();
//     break;
// }
// window.addEventListener("scroll", function () {
//   let vrednost = window.scrollY;
//   pho.style.top = vrednost * 0.85 + "px";
// });

// $(".parallax-window").parallax({ imageSrc: "/phone.jpg" });
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   console.log(offset);
//   const phone = document.getElementById("content__left");
//   phone.style.backgroundPositionY = offset * 1 + "px";
// });

///////// Bad second one
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   console.log(offset);
//   const phone = document.getElementById("absolute");
//   const pos = phone.style.display;
//   // phone.style.transform = translate(40 + "rem" * offset, offset * 100 + "px");
//   // phone.style.top = offset * 0.2 + "px";

//   if (offset < 550 && offset > 10) {
//     phone.style.top = offset / 5 + 350 + "px";
//   } else if (offset < 10) {
//     phone.style.top = 600 + "px";
//   } else {
//     phone.style.top = 500 + "px";
//   }
// });

///// Solution bad 1
// if (offset < 450) {
//   phone.style.top = Math.abs(offset / 10 + 150 + "px");
// } else {
//   phone.style.top = 500 + "px";
// }
// if (pos < 232) {
//   phone.style.display = "none";
//   phone.style.zIndex = "-1";
// }

// console.log(pos);
// phone.style.display = "none";

// const bro = (document.getElementById(
//   "absolute"
// ).style.transform = `translate(40 + "rem", 100 + "px")`);
