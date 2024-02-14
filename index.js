const sidebar = document.querySelector(".sidebar");
const sidebarLockBtn = document.querySelector("#lock-icon");
const submenu = document.querySelector(".sub-menu");
const hasSubMenu = document.querySelector(".hasSubMenu");

const toggleSubmenu = () => {
  submenu.classList.toggle("show");
};

const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

sidebarLockBtn.addEventListener("click", hideSidebar);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("click", showSidebar);
hasSubMenu.addEventListener("click", toggleSubmenu);

// Registration data saving to localStorage

document
  .getElementById("registrationData")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    console.log(firstName);

    // const formData = {
    //   firstName: firstName,
    // };
    // saveFormData(formData);
  });

function saveFormData(formData) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

  storedFormData.push(formData);

  localStorage.setItem("formData", JSON.stringify(storedFormData));
}

const dataSubmitted = () => {
  alert("Submitted");
};
