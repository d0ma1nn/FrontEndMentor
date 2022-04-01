"strict mode";

// x = 23;
// console.log(x);

window.addEventListener("scroll", function () {
  const botLeftRed = document.querySelector(".grid__botleft");
  let offset = window.pageYOffset;
  // console.log(offset);
  if (offset < 220 && offset > 10) {
    botLeftRed.style.transform = `translate(
      0,
      -100px
    )`;
    botLeftRed.style.opacity = 1;
    botLeftRed.style.backgroundColor = "#fa7353";
  } else {
    botLeftRed.style.transform = `translate(
      500px, -100px
    )`;
    botLeftRed.style.opacity = 0.1;
    botLeftRed.style.backgroundColor = "#341c2b";
  }
});
window.addEventListener("scroll", function () {
  let prime = document.querySelector(".content__right");
  let offset = window.pageYOffset;
  if (offset > 520) {
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

let moveLeft = document.querySelector(".content__right");
const buttonLeft = document.getElementById("arrow__left");

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

function moveleft() {
  const buttonL = document.getElementById("arrow__left");
  for (var step = 0; step < 100; step = step + 5) {}
  const primes = document.getElementById("right__id");
  buttonL.addEventListener("click", function () {
    for (var step = 0; step < 100; step++) {
      step = step + 5;
    }

    primes.style.transform = `translate(
      ${step}px,
      50px
    )`;
    console.log(step);
  });
}
moveleft();
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
