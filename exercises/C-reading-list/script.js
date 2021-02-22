function readingList(books) {
  let myReadingList = document.querySelector("#content");
  let myH1 = document.createElement("h1");
  myH1.innerHTML = "Book List";
  myReadingList.appendChild(myH1);
  let myDiv = document.createElement("div");
  myReadingList.appendChild(myDiv);

  books.forEach(function(book){
  let myDiv2 = document.createElement("div");
  myDiv2.className = "div2";
  myDiv.appendChild(myDiv2);
  let myP = document.createElement("p");
  myP.innerHTML = book["title"]
  myDiv2.appendChild(myP);


  let myTitle = document.createElement("p");
  myTitle.innerHTML = book["author"]
  myDiv2.appendChild(myTitle);

  let myImg = document.createElement("img");
  myImg.src = book["img"]
  myImg.style.height = 150;
  myDiv2.appendChild(myImg);
  

  if (book["alreadyRead"]){
  myDiv2.style.backgroundColor = "green";
  }
  else { myDiv2.style.backgroundColor ="red"};
 })

}
  



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqyqzh_0s2p3knp0LuMvZZcRbz8Vy2P7YQw&usqp=CAU"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg"

  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    img: "https://courses.cs.washington.edu/courses/cse403/03su/pragmatic.jpg"
  }
];

readingList(books);