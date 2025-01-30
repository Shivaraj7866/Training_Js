let likeIcon = document.querySelector("i");
let imgContainer = document.querySelector(".container");

imgContainer.addEventListener("dblclick", function () {

  likeIcon.style.transform = "translate(-50%,-50%) scale(1)";
  likeIcon.style.opacity = 0.8;

  setTimeout(function () {
    likeIcon.style.opacity = 0
  }, 1000);

  setTimeout(function () {
    likeIcon.style.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
});
