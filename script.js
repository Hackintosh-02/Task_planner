
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (event.keyCode === 13) { // Check if Enter key is pressed
        if (inputBox.value === '') {
          alert("You must write something...");
        } else {
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
          inputBox.value = "";
        }
        saveData();
      }
}
inputBox.addEventListener("keydown", addTask);
document.addEventListener("keydown", function(event) {
  if (event.key === "/") {
    event.preventDefault();
    inputBox.focus();
  }
});
listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function show(){
  listContainer.innerHTML = localStorage.getItem("data");
}
show();

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


const url = "https://api.quotable.io/random";
let getQuote = async() => {
  try{
    quote.innerText = "Loading...";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = data.content;
    author.innerText = data.author;
  }
  catch(eroor){
    console.error(error);
  }
};

btn.addEventListener("click",getQuote);
window.addEventListener("load",getQuote);
function getRandomLightColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 4) + 8]; // Generate light colors (letters 8 to F)
  }
  console.log(color);
  return color;
}
function getRandomDarkColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 8)]; // Generate dark colors (letters 0 to 7)
  }
  console.log(color);
  return color;
}

document.documentElement.style.setProperty('--light', getRandomLightColor());
document.documentElement.style.setProperty('--dark', getRandomDarkColor());
