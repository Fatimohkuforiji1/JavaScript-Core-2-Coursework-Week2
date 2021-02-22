function listOfNames(arrayOfPeople) {
  let myContent = document.querySelector("#content");
  people.forEach(function(peopleS){
  let myH1 = document.createElement("h1");
  myH1.innerHTML = peopleS["name"]
  let myH2 =document.createElement("h2")
  myH2.innerHTML =peopleS["job"];
  myContent.appendChild(myH1);  
  myContent.appendChild(myH2);
  
   })
  

}
// let myH2 = document.createElement("h2");
//  myContent.appendChild(myH2);
let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
