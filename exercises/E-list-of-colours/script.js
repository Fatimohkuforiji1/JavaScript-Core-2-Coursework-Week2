  function listOfColours(colours) {
  // Write your code here...
  myContent = document.getElementById("content");
  mySelect = document.createElement("select");
  myP = document.createElement("p");
  myP.innerText= `You have selected:`
 
  myContent.appendChild(mySelect);
  myContent.appendChild(myP);

  mySelect.onchange = function(){
  myP.innerText = `You have selected:  ${mySelect.value}`;
  myP.style.backgroundColor = mySelect.value;
  }

    colours.forEach(function(color){
    let myOption = document.createElement("option")
    myOption.innerHTML = color;
    mySelect.appendChild(myOption);
  
     
    
   })
    
  
}

 




const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
