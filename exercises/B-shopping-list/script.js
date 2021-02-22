function shoppingList(arrayOfPeople) {
  // Write your code here...
  let myContent = document.querySelector("#content");
  let myShoppingUl = document.createElement("ul");
  myContent.appendChild(myShoppingUl);
  shopping.forEach(function(Item){
    let myShoppingLi = document.createElement("li")
    myShoppingLi.innerHTML = Item;
    myShoppingUl.appendChild(myShoppingLi);
  })

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
