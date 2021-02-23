// function blueButtonClicked(){
let myBlueBut = document.querySelector("#blueBtn");
let myJumbotronColr = document.querySelector(".jumbotron");
let myDonateABike = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
let myVolunterBut = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];
myBlueBut.addEventListener("click", bluBtnClicked);
function bluBtnClicked() {
  myJumbotronColr.style.backgroundColor = "#588fbd";
  myDonateABike.style.backgroundColor = "#ffa500";
  myVolunterBut.style.backgroundColor = "black";
  myVolunterBut.style.color = "white";
}

let myOrangeBut = document.querySelector("#orangeBtn");
let myJumbotronColrOrange = document.querySelector(".jumbotron");
let myDonateABikeOrange = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
let myVolunterButOrange = document.getElementsByClassName("btn btn-secondary btn-lrg")[0];

myOrangeBut.addEventListener("click", orangeBtnClicked);
function orangeBtnClicked() {
  myJumbotronColrOrange.style.backgroundColor = "#f0ad4e";
  myDonateABikeOrange .style.backgroundColor = "#5751fd";
  myVolunterButOrange.style.backgroundColor = "#31b0d5";
  myVolunterButOrange.style.color = "white";
}

let myGreenBut = document.querySelector("#greenBtn");
let myJumbotronColrGreen = document.querySelector(".jumbotron");
let myDonateABikeGreen = document.getElementsByClassName( "btn btn-primary btn-lrg")[0];
let myVolunterButGreen = document.getElementsByClassName("btn btn-secondary btn-lrg")[0];
myGreenBut.addEventListener("click", greenButtonClicked);
function greenButtonClicked() {
  myJumbotronColrGreen.style.backgroundColor = "#87ca8a";
  myDonateABikeGreen.style.backgroundColor = "black";
  myVolunterButGreen.style.backgroundColor = "#8c9c08";
  myVolunterButGreen.style.color = "white";
}

let myFormFunction = document.querySelector(".form-group");
let mySubmitBtn = document.getElementsByClassName("btn btn-primary")[5];
let yourNameInputField = document.querySelector("#example-text-input");
let myEmailField = document.querySelector("#exampleInputEmail1");
let myDescribeYourselfField = document.querySelector("#exampleTextarea");
mySubmitBtn.addEventListener("click", submitBtnClicked);
function submitBtnClicked(event) {
  event.preventDefault();
  let mySubmitFlag = true;
  if (yourNameInputField.value.length === 0) {
    yourNameInputField.style.backgroundColor = "red";
    submitFlag = false;
  }
  if (myEmailField.value.length === 0 || !myEmailField.value.includes("@")) {
    myEmailField.style.backgroundColor = "red";
    mySubmitFlag = false;
  }
  if (describeYourselfField.value.length === 0) {
    describeYourselfField.style.backgroundColor = "red";
    mySubmitFlag = false;
  }

  if (mySubmitFlag) {
    yourNameInputField.value = "";
    myEmailField.value = "";
    myDescribeYourselfField.value = "";
    alert("Thank you for filling out the form");
  }
}