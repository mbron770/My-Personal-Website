function showIndexWelcomeTextH1() {
  const welcomeParagraph1 = document.createElement("h1");
  welcomeParagraph1.setAttribute("id", "welcomeParagraph1");
  welcomeParagraph1.innerHTML = "I am Mordechai Bronfin";
  document.getElementById("indexWelcomeTextDiv").appendChild(welcomeParagraph1);
}

function showIndexWelcomeTextH2() {
  const welcomeParagraph2 = document.createElement("h2");
  welcomeParagraph2.setAttribute("id", "welcomeParagraph2");
  welcomeParagraph2.innerHTML = "Full Stack Developer. AWS Solutions Architect. The Flatiron School Student.";
  document.getElementById("indexWelcomeTextDiv").appendChild(welcomeParagraph2);
}

function addImageToIndex() {
  const imageTag = document.createElement("img");
  imageTag.setAttribute("src", "images/myImage.JPG");
  document.getElementById("indexWelcomeTextDiv").appendChild(imageTag);
}

function addAboutParagraph1() {
  const aboutParagraph1 = document.createElement("p");
  aboutParagraph1.setAttribute("id", "aboutParagraph1");
  aboutParagraph1.innerHTML = "Welcome to my personal website and portfolio! I made this website from scratch using the skills I learned from the Flatiron prep course as well as from my previous work. This website is meant to showcase my skills and experience and practice full stack web development.";
  document.getElementById("indexWelcomeTextDiv").appendChild(aboutParagraph1);
}

function addAboutParagraph2() {
  const aboutParagraph2 = document.createElement("p");
  aboutParagraph2.setAttribute("id", "aboutParagraph2");
  aboutParagraph2.innerHTML = "";
  document.getElementById("indexWelcomeTextDiv").appendChild(aboutParagraph2);
}

function addExperienceTitle() {
  const expTitle = document.createElement("h1");
  expTitle.setAttribute("id", "expTitle");
  expTitle.innerHTML = "Here is some of my Education and Work Experience";
  document.getElementById("experienceTitle").appendChild(expTitle);
}



const page = window.open('experience.html')

page.addEventListener('DOMContentLoaded', () => {
  const expTitle = document.createElement("h1");
  expTitle.setAttribute("id", "expTitle");
  expTitle.innerHTML = "";
  page.document.getElementById("experienceTitle").appendChild(expTitle);
}); 

const buttonInput = document.getElementById('button');
buttonInput.addEventListener('click', function() {
  alert('Are you sure you want to submit this form?');
});





showIndexWelcomeTextH1();
showIndexWelcomeTextH2(); 
addImageToIndex(); 
addAboutParagraph1(); 










