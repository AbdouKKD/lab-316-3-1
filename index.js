var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// ⟡₊ ⊹ Part 1: Getting Started ⟡₊ ⊹
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// ⟡₊ ⊹ Part 2: Creating a Menu Bar ⟡₊ ⊹
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// ⟡₊ ⊹ Part 3: Adding Menu Buttons ⟡₊ ⊹
menuLinks.forEach(link => {
  const newEl = document.createElement("a");
  newEl.href = link.href;
  newEl.textContent = link.text;
  topMenuEl.append(newEl);
})

//Part 3: Creating the Submenu
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
// temporarily hide it
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part 4: Adding Menu Interaction
const topMenuLinks = topMenuEl.querySelectorAll("a");
for (let i = 0; i < topMenuLinks.length; i++) {
  let link = topMenuLinks[i];

  link.addEventListener('click', event => {
    event.preventDefault();
    
    if (event.target.tagName != "A") return;
    console.log(event.target.textContent); 

    let menuObj = menuLinks[i];

    if (!event.target.classList.contains("active")) {
      // set sublinks
      if ("subLinks" in menuObj) {
        subMenuEl.style.top = "100%";
        buildSubmenu(menuObj.subLinks);
      }
      else {
        subMenuEl.style.top = "0";
       
        if (event.target.textContent == "about") mainEl.innerHTML = `<h1>About</h1>`;
      }
    
      event.target.classList.add("active");
    }
    else {
      subMenuEl.style.top = "0"; 
    }
    topMenuLinks.forEach(link => { if (link != event.target) link.classList.remove("active") });
  });
}

// Part 5: Adding Submenu Interaction 
function buildSubmenu(subLinksArray) {
  // clear content
  subMenuEl.innerHTML = "";
  subLinksArray.forEach(subLink => {
    let a = document.createElement("a");
    a.href = subLink.href;
    a.textContent = subLink.text;
    subMenuEl.append(a);
  })
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName != "A") return;
  console.log(event.target.textContent); // check
  subMenuEl.style.top = "0";
  topMenuLinks.forEach(link => { link.classList.remove("active") });
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`
})
