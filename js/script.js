"use strict"
import tabs from "./modules/tabs";
import loader from "./modules/loader";
import Timer from "./modules/timer";
import modal, { openBtn } from "./modules/modal";
import classCard from "./modules/class";
import resClass from "./modules/resclass";
import forms from "./modules/form";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
    const modalTimeId = setTimeout(() => openBtn(".modal__content", ".modal", modalTimeId), 40000);

  tabs(".tabheader__item", ".tab_content", ".tabheader__items")
  loader(".loader-wrapper")
  Timer('2027-04-20', ".timer")
  modal("[data-modal]", ".modal", ".modal__content", modalTimeId)    
  classCard(".offers-items")
  resClass()
  forms("form", modalTimeId)
  slider()

  //Read more

  const readMore = document.querySelector(".read-more");

  readMore.addEventListener("click", () => {
    window.scrollBy(0, 2540);
  });
});
