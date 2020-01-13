$(document).ready(function() {
  $("#first").addClass("active");
});

$("#toggle").change(function() {
  if (this.checked) {
    $("section").css("zIndex", -3000);
    $(".nav-logo").css({
      backgroundImage: "url(./images/logo-bookmark-mobile.svg)",
      zIndex: "50",
      position: "fixed"
    });
  } else {
    $("section").css("zIndex", 0);
    $(".nav-logo").css({
      backgroundImage: "url(./images/logo-bookmark.svg)",
      zIndex: "inherit",
      position: "inherit"
    });
  }
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    target.classList.add("active");
    tab.classList.add("active");
  });
});

const myForm = document.getElementById("myForm");
const email = document.getElementById("email");

myForm.addEventListener("submit", e => {
  e.preventDefault();

  checkInputs();
});

function setErrorFor(input) {
  const formControl = document.getElementById("error");
  formControl.style.display = "inherit";
  document.querySelector(".image-error").style.display = "inherit";
}

function checkInputs(input) {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email);
    changeEmail();
    marginButton();
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
    changeEmail();
    marginButton();
  } else {
    setSuccessFor(email);
  }
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function changeEmail() {
  const placeholder = document.getElementById("email");
  placeholder.placeholder = "email@example.com";
}

function marginButton() {
  const button = document.getElementById("button");
  if (window.innerWidth <= 750) {
    button.style.marginTop = "20px";
  } else if (window.innerWidth != 750) {
    button.style.marginTop = 0;
  }
}
