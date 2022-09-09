// let value;

// value = document;

// // Scriptler

// value = document.scripts;

// value = document.scripts.length;
// value = document.scripts[0];

// // Linkler
// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length-1]
// value = document.links[document.links.length-1].getAttribute("class");
// value = document.links[document.links.length-1].getAttribute("href");
// value = document.links[document.links.length-1].className;
// value = document.links[document.links.length-1].classList;


// // Formlar 

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name");

// value = document.forms[0].method;


// console.log(value);



// Elementi Id'e Göre Seçme

// let element;

// element = document.getElementById("todo-form");
// element = document.getElementById("tasks-title");

// // Element Class'a Göre Seçme 

// element = document.getElementsByClassName("list-group-item")[0];
// element = document.getElementsByClassName("card-header");

// // Element Tag'e Göre Seçme 

// element = document.getElementsByTagName("div");

// // Query Selector - Css Selector - Tek bir element 

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");

// element = document.querySelector(".list-group-item");

// element = document.querySelector("li");
// element = document.querySelector("div");

// // QuerySelectorAll - Tüm Elementleri Seç
// element = document.querySelectorAll(".list-group-item");

// element.forEach(function(el){
//     console.log(el);

// });
// console.log(element);

// const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// // console.log(element.href);
// console.log(element.style);

// Style ve Element Özelliklerini Değiştirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML = "<span style ='color:green'>Silin</span>"

// let element2 = document.querySelector("li:first-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelector("li:nth-child(4)");
// element2 =document.querySelectorAll("li:nth-child(odd)");
// element2 = document.querySelectorAll("li:nth-child(even");

// element2.forEach(function(el){
//     el.style.background ="#ccc";
//     el.style.color = "red";
// })

// const elements = document.querySelectorAll(".list-group-item"); // Node List
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// });

// console.log(element2);
// console.log(element);


// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardrow;

// // Child Nodes 

// value = todoList.childNodes;
// value =todoList.childNodes[0];

// // Children - Element

// value = todoList.children;
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[2].textContent = "Değişti";



// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "Burası da değişti";


// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount;

// value = cardrow;
// value = cardrow.parentElement;
// value = cardrow.parentElement.parentElement;


// // Element Kardeşleri

// value = todo;

// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling.previousElementSibling;

// console.log(value);

// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>      

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body") [1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank" ;

// // // Text Content

// // // cardbody.textContent = "jwsjajajjaja"

// // // Text Node 

// // const text = document.createTextNode("Naber");
// // cardbody.appendChild(text);
// // console.log(cardbody);

// newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

// cardbody.appendChild(newLink);

// console.log(newLink);



// Dinamik Element Silme


// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu

// todos[0].remove();

// Remove Child

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);

// console.log(todos);
// console.log(todoList);


// REPLACE 
// <h5 class="card-title" id = "tasks-title">Todolar</h5> 
// const cardbody = document.querySelectorAll(".card-body")[1]; 

// const newElement = document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";

// // Eski Element

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// console.log(cardbody);


// const todoInput = document.getElementById("todo");
// let element;


// element = todoInput;
// element = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");


// element = todoInput;
// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","Naber");
// todoInput.setAttribute("title","Input");
// todoInput.removeAttribute("name");

// element = todoInput;
// // element = todoInput.hasAttribute("name");

// console.log(element);

//   const filterInput = document.getElementById("filter");
//   const todoform = document.getElementById("todo-form");

//   todoform.addEventListener("submit",submitform);

//   function submitform(e){

//     console.log("Submit Eventi");


//     e.preventDefault();


//   }


// filterInput.addEventListener("focus",function(e){

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);

//     // console.log("Naber");


// });
// filterInput.onfocus = function(){
//     console.log("Naber");
// }


// Klavye Eventleri
//  const header = document.querySelector(".card-header");
//  const todoInput = document.querySelector("#todo");

//  todoInput.addEventListener("keyup",changeText);

//  function changeText(e){
//     header.textContent= e.target.value;
 //console.log(e.target.value);
//  }


//keypress
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

// keydown
// document.addEventListener("keydown",run);

// function run(e){
//     //console.log(e.which);
//     console.log(e.key);
// }

//keyup

// document.addEventListener("keyup",run);

// function run(e){
//     //console.log(e.which);
//     console.log(e.key);
// }  


// const cardbody = document.querySelectorAll(".card-body")[1];

// const title = document.querySelector("#tasks-title");

// Click Event
// title.addEventListener("click",run);
// Double Click
// title.addEventListener("dblclick",run);

// Mouse Down
// title.addEventListener("mousedown",run);
// Mouse Up
// title.addEventListener("mouseup",run);

// Mouse Over
// title.addEventListener("mouseover",run);
// // Mouse Out
// title.addEventListener("mouseout",run);

// cardbody.addEventListener("mouseover",run);
// cardbody.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave

// cardbody.addEventListener("mouseenter",run);
// cardbody.addEventListener("mouseleave",run);


// function run(e) {
//   console.log(e.type);
// }

// Input Eventleri

// const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//   console.log("Sayfa Yüklendi");
// }

// // Focus 
// filter.addEventListener("focus",run);
// // Blur
// filter.addEventListener("blur",run);

// Paste
// filter.addEventListener("paste",run);
// Copy 
// filter.addEventListener("copy",run);

// Cut 
// filter.addEventListener("cut",run);

// Select
// filter.addEventListener("select",run);


// function run(e) {
//   console.log(e.type);

// }


// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
// console.log("Div Container");

// });

// document.querySelector(".card-row").addEventListener("click",function(){
//   console.log("Card Row");
  
//   });

//   document.querySelector(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
    
//     });

// Event Capturing veya Delegation

//  const cardbody = document.querySelectorAll(".card-body")[1];

//  cardbody.addEventListener("click",run);

//  function run(e){
//   if (e.target.className === "fa fa-remove"){
//     console.log("Silme İşlemi");
//   }
//   if (e.target.id === "filter") {
//     console.log("Filtreleme İşlemi");
//   }
//   if(e.target.id === "clear-todos") {
//     console.log("Tüm taskları silme işlemi");

//   }

//   // console.log(e.target);

//  }


// Local Storage

// SetItem 

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar", 50);

// Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("sport"));

if(localStorage.getItem("sport") === null){
    console.log("Sorguladığınız veri bulunmuyor");

}
else {
    console.log("Sorguladığınız veri bulunmuyor");
    
}
