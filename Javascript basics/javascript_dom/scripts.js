// // DOM IS BASICALLY A DOCUMENT OBJECT MODEL
// // ====== SELECTORS ====== //
// //_____ Single Element Selectors _____ //

// // console.log(window);
// var form = document.getElementById("my-form");
// console.log(form);
// console.log(document.querySelector("h1")); // selects first h1 tag

// //______ Multiple Element Selectors ______ //
// // grab container
// // console.log(document.querySelectorAll(".item")); //selects all the element
// // you can use array methods on querySelectorAll
// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// // =========== MANIPULATING THE DOM ============= //
// const ul = document.querySelector(".items");

// //ul.remove();    // removes the ul
// // ul.lastElementChild.remove(); //removes item 3
// // ul.firstElementChild.textContent = "Hello";     // changes item 1 to Hello

// ul.children[1].innerText = "Max";
// ul.children[2].innerHTML = "<h4>Hello</h4>";

// // ____ change style of btn

// const btn = document.querySelector(".btn");
// btn.style.background = "red"; // submit button color to red

// // ========== EVENTS ========== //
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
//   console.log(event.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

// /*
// console.log(event) gives the details of the mouse position and everything
// console.log(event.target) gives the details of the element on which the event has been occured,
// here the details of the button
// console.log(event.target.className) gives the classname of the target
// console.log(event.target.id) gives the id of the target
// */

// complete mini-application here
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    // alert("Please Enter the fields");
    msg.classList.add("error");
    msg.innerHTML = "Please Enter all the fields";
    setTimeout(() => {
      msg.remove();
    }, 3000);
    /* setTimeout takes a function and time limit as two parameters */
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`
      ${nameInput.value}:${emailInput.value}`)
    );
    userList.appendChild(li);

    // clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
