"strict mode";

// x = 23;
// console.log(x);



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
