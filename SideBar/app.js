const btn = document.querySelector(".sidebar-toggle");
const clsbtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", function () {
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }
  sidebar.classList.toggle("show-sidebar");
});

clsbtn.addEventListener("click", () =>
  sidebar.classList.remove("show-sidebar")
);
