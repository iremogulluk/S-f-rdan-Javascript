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

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body") [1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank" ;

// Text Content



console.log(newLink);