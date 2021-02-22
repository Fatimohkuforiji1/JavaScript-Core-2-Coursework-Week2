function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let myUl = document.createElement("ul");
    content.appendChild(myUl);
    todos.forEach(function(toDo){ 
       let myLi = document.createElement("li");
       myLi.innerHTML = toDo["todo"];
    myUl.appendChild(myLi);
    myLi.addEventListener("click",  function(){
      console.log(myLi);
      if (myLi.style.textDecoration === "line-through") {
        myLi.style.textDecoration = "none";
      } else { myLi.style.textDecoration =  "line-through"}
    

    }) ;
 
  

  })
}
  

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);