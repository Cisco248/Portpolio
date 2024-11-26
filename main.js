// About Section Tab Content
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab1(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Project Section Tab Content
var tab_links = document.getElementsByClassName("project-tab-links");
var tab_contents = document.getElementsByClassName("project-tab-contents");

function opentab2(tab_name) {
    for (tab_link of tab_links) {
        tab_link.classList.remove("active-link");
    }

    for (tab_content of tab_contents) {
        tab_content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}

// Side Menu Collape and Expand
var sidemenu = document.getElementById("sidemenu");
      function openmenu() {
        sidemenu.style.right = "0";
      }
      function closemenu() {
        sidemenu.style.right = "-200px";
      }

// Save The Form Data to Google Sheet   
const scriptURL ="https://script.google.com/macros/s/AKfycbyUv_NkdjMTsTzhL3ChbEjMgUh3XOpE-XF-jQ5lhsYdOhSTZ2fFAuOvkdzZHInk0VCJ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
            msg, (innerHTML = "");
        }, 5000);
        form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });