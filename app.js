$(document).ready(function() {
  $("#first").addClass("active");
});

$("#toggle").change(function() {
  if (this.checked) {
    $("section").css("zIndex", -3000);
    $(".nav-logo").css({
      backgroundImage: "url(/images/logo-bookmark-mobile.svg)",
      zIndex: "50",
      position: "fixed"
    });
  } else {
    $("section").css("zIndex", 0);
    $(".nav-logo").css({
      backgroundImage: "url(/images/logo-bookmark.svg)",
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
