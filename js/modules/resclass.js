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

export default resClass