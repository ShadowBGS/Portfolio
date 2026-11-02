"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#nav-links");

if (menuButton && navigation) {
    document.documentElement.classList.add("js");
    menuButton.hidden = false;

    const setMenu = (open) => {
        menuButton.setAttribute("aria-expanded", String(open));
        navigation.classList.toggle("is-open", open);
        menuButton.querySelector("span").textContent = open ? "−" : "+";
    };

    menuButton.addEventListener("click", () => {
        setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
            setMenu(false);
            menuButton.focus();
        }
    });

    window.matchMedia("(min-width: 761px)").addEventListener("change", () => setMenu(false));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
