"strict mode";

x = 23;
console.log(x);

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
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  console.log(offset);
  const phone = document.getElementById("absolute");

  // phone.style.transform = translate(40 + "rem" * offset, offset * 100 + "px");
  // phone.style.top = offset * 0.2 + "px";

  if (offset < 70) {
    phone.style.top = offset / 3 + 250 + "px";
  } else {
    phone.style.top = 400 + "px";
  }
  // phone.style.display = "none";
});
// const bro = (document.getElementById(
//   "absolute"
// ).style.transform = `translate(40 + "rem", 100 + "px")`);
