// =========================ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ===================

// 2) Сделайте ф-цию, генерирующую всплывающее меню из определенной структуры

const exArr = [
  {
      title: "products",
      subItems: [
          "apples",
          "bananas",
          "oranges"
      ]
  },
  {
      title: "stores",
      subItems: [
          "SuperFruits",
          "MegaFruits",
          "GigaFruits"
      ]
  },
  {
      title: "noSubitem"
  },
  {
      title: "contact",
      subItems: [
          "+1060606065",
          "+3055656560",
          "+2565656565",
          "+8998989899",
          "+4332322214"
      ]
  }
];

function createMenu(arr) {
  const nav =  document.body.firstElementChild;
  const newUl = document.createElement('ul');
  newUl.classList.add('main-nav__items');
  nav.insertBefore(newUl, nav.children[0]);
  
  for (let i = 0; i < arr.length; i++) {
    let {title, subItems} = arr[i];

    const newLi = document.createElement('li');
    newLi.classList.add('main-nav__item');
    newLi.innerText= title;
    newUl.appendChild(newLi);
    
    if (subItems !== undefined ) {
      subGeneranor(subItems, newLi);
    }
  }
  
}

function subGeneranor(subItemsArr, parentLi) {
  const newSubUl = document.createElement('ul');
  newSubUl.classList.add('main-nav__sub-items');
  parentLi.insertBefore(newSubUl, parentLi.firstElementChild);

  subItemsArr.forEach(e => {
    const newSubLi = document.createElement('li');
    newSubLi.classList.add('main-nav__sub-item');
    newSubLi.innerText = e;
    newSubUl.appendChild(newSubLi);
  });
}

createMenu(exArr);