 var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},

   const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML= "<h1>Dom Manipulation</h1>";
mainEl.classList.add("flex-ctr");


const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor="var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement("a")
    a.setAttribute("href",menuLinks[i].href)
    a.textContent=menuLinks[i].text 
    topMenuEl.append(a)}
  

  const subMenuEl = document.getElementById('sub-menu');

  subMenuEl.style.height= "100%";
 subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position ="absolute";
  subMenuEl.style.top = "0";

 

   
   let topMenuLinks = document.querySelectorAll('a');
  
 
topMenuEl.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
     const clickedLink = menuLinks.find(link => link.text === event.target.textContent);
    if (clickedLink && clickedLink.subLinks) 
    {
      buildSubmenu(clickedLink.subLinks);
      subMenuEl.style.top = '100%';
    }
    else {
      subMenuEl.style.top = '0';
    }
  });
