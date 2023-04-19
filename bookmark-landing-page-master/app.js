const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("show");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const emailId = document.getElementById("email");
const btnclick = document.querySelector(".contact-btn");
const emailVal = btnclick.addEventListener("click", checkEmail);
function checkEmail(emailVal) {
  emailVal.preventDefault();
  let emailInput = emailId.value;
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(emailInput) === false && emailInput.length > 0) {
    document.getElementById("lbltxt-email").style.visibility = "visible";
    document.getElementById("lbltxt-email").innerHTML =
      "Whoops make sure it's an email";
    emailId.style.outline = "2px solid hsl(0, 94%, 66%)";
    emailId.style.backgroundImage = "url('./images/icon-error.svg')";
    emailId.style.backgroundRepeat = "no-repeat";
    emailId.style.backgroundColor = "hsl(0,0%,100%)";
    emailId.style.backgroundPosition = "right 20px top 15px";
  } else if (emailInput.length === 0) {
    document.getElementById("lbltxt-email").style.visibility = "visible";
    document.getElementById("lbltxt-email").innerHTML = "Email cannot be blank";
    emailId.style.outline = "2px solid hsl(0, 94%, 66%)";
    emailId.style.backgroundImage = "url('./images/icon-error.svg')";
    emailId.style.backgroundRepeat = "no-repeat";
    emailId.style.backgroundColor = "hsl(0,0%,100%)";
    emailId.style.backgroundPosition = "right 20px top 15px";
  } else {
    document.getElementById("lbltxt-email").style.visibility = "hidden";
    emailId.style.outline = "none";
  }
}

const hamburgerMenu = document.querySelector(".menu");
hamburgerMenu.addEventListener("click", function (e) {
  console.log("clicked");
});

const mainMenu = document.querySelector(".header-nav");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "block";
  mainMenu.style.top = "0px";
  mainMenu.style.backgroundImage =
    "url('./images/image-bookmark-mobile.svg'),url('./images/icon-facebook.svg'),url('./images/icon-twitter.svg')";
  mainMenu.style.backgroundRepeat = "no-repeat,no-repeat,no-repeat";
  mainMenu.style.backgroundPosition =
    "top 3rem left 3rem, bottom 10% left 14rem, bottom 10% left 20rem";
  document.body.style.overflow = "hidden";
}
show();
function close() {
  mainMenu.style.display = "none";
  mainMenu.style.top = "-100%";
  document.body.style.overflow = "visible";
}
close();
