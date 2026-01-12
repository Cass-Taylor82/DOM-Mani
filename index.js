var menuLinks=[
    {text:"about",href:"/about"},
    {text:"catalog",href:"/catalog"},
    {text:"orders",href:"/orders"},
    {text:"account",href:"/account"},
];
let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`
mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
for (let link of menuLinks) {
    let anchor = document.createElement('a');
    anchor.setAttribute("href", link href);
    anchor.textContent = link.text;
    topMenuEl.appendChild(anchor);
}