/* =====================================
   ELEMENTS
===================================== */

const sidebar = document.querySelector(".sidebar");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.querySelector(".overlay");

const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.querySelector(".profile-menu");

const notifyBtn = document.getElementById("notifyBtn");
const notificationMenu =
document.querySelector(".notification-menu");

/* =====================================
   MOBILE SIDEBAR
===================================== */

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("show");
        overlay.classList.toggle("show");

    });

}

/* =====================================
   CLOSE SIDEBAR
===================================== */

if(overlay){

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("show");
        overlay.classList.remove("show");

    });

}

/* =====================================
   PROFILE DROPDOWN
===================================== */

if(profileBtn){

    profileBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        profileMenu.classList.toggle("show");

        if(notificationMenu){
            notificationMenu.classList.remove("show");
        }

    });

}

/* =====================================
   NOTIFICATION DROPDOWN
===================================== */

if(notifyBtn){

    notifyBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        notificationMenu.classList.toggle("show");

        if(profileMenu){
            profileMenu.classList.remove("show");
        }

    });

}

/* =====================================
   CLOSE DROPDOWNS ON OUTSIDE CLICK
===================================== */

document.addEventListener("click", () => {

    if(profileMenu){
        profileMenu.classList.remove("show");
    }

    if(notificationMenu){
        notificationMenu.classList.remove("show");
    }

});

/* =====================================
   ESC KEY CLOSE
===================================== */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        sidebar.classList.remove("show");

        overlay.classList.remove("show");

        if(profileMenu){
            profileMenu.classList.remove("show");
        }

        if(notificationMenu){
            notificationMenu.classList.remove("show");
        }
    }

});

/* =====================================
   DARK MODE
===================================== */

/*
   Optional:
   Add this button later in navbar

   <button id="themeToggle">
      <i class="fa-solid fa-moon"></i>
   </button>
*/

const themeToggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

}

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
        document.body.classList.contains("dark");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

    });

}

/* =====================================
   ACTIVE LINK HIGHLIGHT
===================================== */

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll(".nav-links li");

navLinks.forEach((item) => {

    const link =
    item.querySelector("a");

    if(!link) return;

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        item.classList.add("active");

    }else{

        item.classList.remove("active");

    }

});

/* =====================================
   SIDEBAR STATE SAVE
===================================== */

const sidebarState =
localStorage.getItem("sidebarOpen");

if(sidebarState === "true"){

    sidebar?.classList.add("show");

}

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        const isOpen =
        sidebar.classList.contains("show");

        localStorage.setItem(
            "sidebarOpen",
            isOpen
        );

    });

}

/* =====================================
   SMOOTH CARD HOVER EFFECT
===================================== */

const cards =
document.querySelectorAll(
    ".stat-card, .chart-card, .table-card, .activity-card"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
        "all .3s ease";

    });

});

/* =====================================
   SIMPLE PAGE FADE IN
===================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition =
    "opacity .4s ease";

    requestAnimationFrame(() => {

        document.body.style.opacity = "1";

    });

});

/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(
    "%cAdminPro Dashboard Loaded",
    "color:#3b82f6;font-size:14px;font-weight:bold;"
);