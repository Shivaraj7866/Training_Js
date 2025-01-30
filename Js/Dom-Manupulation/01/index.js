console.log("connected");

let btn = document.querySelector("button");
let addFriend = document.querySelector("h5");
let flag = false;

btn.addEventListener("click", () => {
  if (flag === false) {
    addFriend.innerHTML = "Friends";
    addFriend.style.color = "green";
    btn.innerHTML = "Remove";
    btn.style.cursor="pointer"
    btn.style.backgroundColor = "red"
    flag = true;
    addFriend.style.transition= "all ease 0.5s";
  } else {
    addFriend.innerHTML = "Stranger";
    addFriend.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "burlywood"
    flag = false;
  }
});
