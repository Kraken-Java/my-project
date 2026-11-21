/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/class.js"
/*!*****************************!*\
  !*** ./js/modules/class.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_get_resourses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/get-resourses */ "./js/services/get-resourses.js");


function classCard(selector){
class OfferMenu {
    constructor(src, alt, title, descr, discount, sale, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.discount = discount;
      this.sale = sale;
      this.formatToUSD();
      this.parent = document.querySelector(parentSelector)
    }
    formatToUSD() {
      this.discount = this.discount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      this.sale = this.sale.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <div>
              <h3>${this.title}</h3>
              <p>${this.descr}</p>
              <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
            </div>
                `

      this.parent.append(element)
    }
  }
;(0,_services_get_resourses__WEBPACK_IMPORTED_MODULE_0__["default"])().then(data => {
    data.forEach(offer => {
      const { src, alt, title, descr, discount, sale, } = offer
      new OfferMenu(src, alt, title, descr, discount, sale, selector).render()
    })
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classCard);

/***/ },

/***/ "./js/modules/form.js"
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function forms(formSelector, modalTimeId) {
  const form = document.querySelector(formSelector)
  const token = '9009004884:AAFEvZYp1a4P6pCMyAWsz6rmAhK79AjA5_E'
  const chatId = '7682902755'
  const message = {
    loading: "Loading...",
    success: "Thanks To Contacting with us",
    fail: "Something went wrong"
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const loader = document.createElement("div")
    loader.classList.add("loader")
    loader.classList.add("loader_center")
    loader.style.width = '20px'
    loader.style.height = '20px'
    loader.style.marginTop = '10px'
    form.append(loader)
    const formData = new FormData(form)

    const object = {}

    formData.forEach((value, key) => {
      object[key] = value
    })
    sendMessageToTelegram(loader, object)
  })
  async function sendMessageToTelegram(loader, object) {
      try {

         await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Name: ${object.name}, Phone: ${object.phone}`
          })
        })
        showStatusMessage(message.success)
      } catch {
        showStatusMessage(message.fail)
      }finally{
        loader.remove(),
        form.reset()
      }
    }
  function showStatusMessage(message) {
    const modalDialog = document.querySelector(".modal__dialog")

    modalDialog.classList.add("hide")
    ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openBtn)(".modal", ".modal__content", modalTimeId)

    const statusModal = document.createElement("div")

    statusModal.classList.add("modal__dialog")
    statusModal.innerHTML = `
    <div class="modal__content">
    <div data-modal-close class="modal__close">&times;</div>
    <div class="modal__title">${message}</div>
    </div>
    `

    document.querySelector(".modal").append(statusModal)

    setTimeout(() => {
      statusModal.remove()
      modalDialog.classList.remove("hide")
    }, 5000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ },

/***/ "./js/modules/loader.js"
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader(loaderSelector) {
    const loaderWrapper = document.querySelector(loaderSelector);

    setTimeout(() => {
        loaderWrapper.style.display = "none";
    }, 1000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeBtn: () => (/* binding */ closeBtn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openBtn: () => (/* binding */ openBtn)
/* harmony export */ });
function openBtn(modalContentSelector, modalSelector, modalTimeId) {
    const   modalContent = document.querySelector(modalContentSelector),
    modal = document.querySelector(modalSelector)
    modal.classList.add("show");
    modalContent.classList.add("modal-fade");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    if(modalTimeId) {
        clearInterval(modalTimeId);
    }
  }
  function closeBtn(modalSelector,) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

function modal(btnSelector, modalSelector,modalContentSelector, modalTimeId){
    const modalOpenBtn = document.querySelectorAll(btnSelector),
    modal = document.querySelector(modalSelector)

  modalOpenBtn.forEach((btn) => {
    btn.addEventListener("click", () => openBtn(modalContentSelector, modalSelector,modalTimeId));
  });
  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) {
      closeBtn(modalSelector);
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeBtn(modalSelector);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeBtn();
    }
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);
;

/***/ },

/***/ "./js/modules/resclass.js"
/*!********************************!*\
  !*** ./js/modules/resclass.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function resClass() {
class MenuListlef {
    constructor(sr, titl, desc, sal, parentSelecto) {
      this.sr = sr
      this.titl = titl
      this.desc = desc
      this.sal = sal
      this.paren = document.querySelector(parentSelecto)
    }
    renderMenuList() {
      const div = document.createElement("div")
      div.innerHTML = `
      <div class="menu-item">
              <img src="${this.sr}" alt="${this.titl}">
        <div>
              <h3>${this.titl} <span class="primary-text">${this.sal}</span></h3>
            <p>${this.desc}</p>
        </div>
      </div>`
      this.paren.append(div)
    }
  }
  fetch("http://localhost:3000/menulistleft", {
    method:"GET",
    headers:{"Content-Type": "application/json"}
  }).then(response=> response.json()).then(data =>{
    data.forEach((ite) =>{
    const {sr , titl ,desc ,sal} = ite
    new MenuListlef(sr, titl, desc,sal, ".menu-items-left").renderMenuList()
  })})
class MenuListright {
    constructor(sr, titl, desc, sal, parentSelecto) {
      this.sr = sr
      this.titl = titl
      this.desc = desc
      this.sal = sal
      this.paren = document.querySelector(parentSelecto)
    }
    renderMenuList() {
      const div = document.createElement("div")
      div.innerHTML = `
      <div class="menu-item">
              <img src="${this.sr}" alt="${this.titl}">
        <div>
              <h3>${this.titl} <span class="primary-text">${this.sal}</span></h3>
            <p>${this.desc}</p>
        </div>
      </div>`
      this.paren.append(div)
    }
  }

  fetch("http://localhost:3000/menulist", {
    method:"GET",
    headers:{"Content-Type": "application/json"}
  }).then(response =>response.json()).then(data=> {
    data.forEach((ite) =>{
    const {sr , titl ,desc ,sal} = ite
    new MenuListright(sr, titl, desc,sal, ".menu-items-right").renderMenuList()
  })})


  //Res
  class RestourantTimer {
    constructor(src, title, descr, parentSelectorr) {
      this.src = src
      this.title = title
      this.descr = descr
      this.parent = document.querySelector(parentSelectorr)
    }
    renderForTimer() {
      const item = document.createElement("div")
      item.classList.add("daytime-item")
      item.innerHTML = `
            <img src="${this.src}" alt="${this.title}">
            <h3>${this.title}</h3>
            <p>${this.descr}</p>
                `

      this.parent.append(item)
    }

  }

  const timeRes = [
    {
      src: "./img/breckfastIcon.png",
      title: "Breakfast",
      descr: "8:00 am to 10:00 am"
    },
    {
      src: "./img/lunchIcon.png",
      title: "Lunch",
      descr: "4:00 pm to 7:00 pm"
    },
    {
      src: "./img/dinnerIcon.png",
      title: "Dinner",
      descr: "9:00 pm to 1:00 Am"
    },
    {
      src: "./img/dessertIcon.png",
      title: "Dessert",
      descr: "All day"
    },
  ]
  timeRes.forEach(item => {
    const { src, title, descr } = item
    new RestourantTimer(src, title, descr, ".daytime-items").renderForTimer()
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resClass);

/***/ },

/***/ "./js/modules/slider.js"
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(){
const slides = document.querySelectorAll(".offer__slide"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesInner = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width
        
        let slideIndex = 1,
        offset = 0
        
        if(slides.length <10){
          total.textContent = `0${slides.length}`
          current.textContent = `0${slideIndex}`
        }else{
          total.textContent = slides.length
          current.textContent = slideIndex
        }

        slidesInner.style.width = 100* slides.length + "%"
        slidesInner.style.display = "flex"
        slidesInner.style.transition = "all .5s ease"
        slidesWrapper.style.overflow = "hidden"

        slides.forEach(slide=>{
          slide.style.width = width
        })

        next.addEventListener("click", () =>{
          if(offset === +width.slice(0, width.length -2) *(slides.length -1)){
            offset = 0
          }else{
            offset += +width.slice(0, width.length -2)
          }
          slidesInner.style.transform = `translateX(-${offset}px)`

          if(slideIndex === slides.length){
            slideIndex = 1
          }else{
            slideIndex++
          }
          if(slides.length < 10){
            current.textContent = `0${slideIndex}`
          }else{
            current.textContent = slideIndex
          }

           
        })
        prev.addEventListener("click", () =>{
          if(offset === 0){
            offset = +width.slice(0, width.length -2) *(slides.length -1)
          }else{
            offset -= +width.slice(0, width.length -2)
          }
          slidesInner.style.transform = `translateX(-${offset}px)`
          if(slideIndex === 1){
            slideIndex = slides.length
          }else{
            slideIndex--
          }
          if(slides.length < 10){
            current.textContent = `0${slideIndex}`
          }else{
            current.textContent = slideIndex
          }
        })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ },

/***/ "./js/modules/tabs.js"
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector,tabContentsSelector, tabParentsSelector ) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabContents = document.querySelectorAll(tabContentsSelector),
        tabParents = document.querySelectorAll(tabParentsSelector);

    function hideTabContents() {
        tabContents.forEach((tabContent) => {
            tabContent.classList.add("hide");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(index = 0) {
        tabContents[index].classList.add("show", "fade");
        tabContents[index].classList.remove("hide");
        tabs[index].classList.add("tabheader__item_active");
    }

    hideTabContents();
    showTabContent();

    tabParents.forEach((parent) => {
        parent.addEventListener("click", (event) => {
            const target = event.target;

            if (target && target.classList.contains("tabheader__item")) {
                tabs.forEach((tab, index) => {
                    if (target === tab) {
                        hideTabContents();
                        showTabContent(index);
                    }
                });
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ },

/***/ "./js/modules/timer.js"
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Timer(deadLine, selector){

  function getTimeRemainning(endtime) {
    let days, hours, minutes, seconds;
    const time = Date.parse(endtime) - Date.now();

    if (time <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(time / (1000 * 60 * 60 * 24));
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((time / (1000 * 60)) % 60);
      seconds = Math.floor((time / 1000) % 60);
    }

    return {
      totalTime: time,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  function formatNumber(number) {
    if (number >= 0 && number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);

    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    function upDateClock() {
      const time = getTimeRemainning(endtime);

      days.textContent = formatNumber(time.days);
      hours.textContent = formatNumber(time.hours);
      minutes.textContent = formatNumber(time.minutes);
      seconds.textContent = formatNumber(time.seconds);

      if (time.totalTime <= 0) {
        clearInterval(timeInterval);
      }
    }

    upDateClock();

    const timeInterval = setInterval(upDateClock, 1000);
  }

  setClock(selector, deadLine);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);

/***/ },

/***/ "./js/services/get-resourses.js"
/*!**************************************!*\
  !*** ./js/services/get-resourses.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getResourses() {
    try{
        const responese = await fetch("http://localhost:3000/offers")
        return await responese.json()
    }catch{
        console.log("error");
    }finally{
        console.log("finally");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResourses);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperties(exports, { [Symbol.toStringTag]: { value: 'Module' }, __esModule: { value: true } });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loader */ "./js/modules/loader.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/class */ "./js/modules/class.js");
/* harmony import */ var _modules_resclass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/resclass */ "./js/modules/resclass.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

;








window.addEventListener("DOMContentLoaded", () => {
    const modalTimeId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openBtn)(".modal__content", ".modal", modalTimeId), 40000);

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item", ".tab_content", ".tabheader__items")
  ;(0,_modules_loader__WEBPACK_IMPORTED_MODULE_1__["default"])(".loader-wrapper")
  ;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('2027-04-20', ".timer")
  ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-modal]", ".modal", ".modal__content", modalTimeId)    
  ;(0,_modules_class__WEBPACK_IMPORTED_MODULE_4__["default"])(".offers-items")
  ;(0,_modules_resclass__WEBPACK_IMPORTED_MODULE_5__["default"])()
  ;(0,_modules_form__WEBPACK_IMPORTED_MODULE_6__["default"])("form", modalTimeId)
  ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__["default"])()

  //Read more

  const readMore = document.querySelector(".read-more");

  readMore.addEventListener("click", () => {
    window.scrollBy(0, 2540);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map