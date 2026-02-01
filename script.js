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

var topMenuEl = document.querySelector('#top-menu')

menuLinks.forEach(function (link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    topMenuEl.appendChild(a);
});

//PART 3
var subMenuEl = document.querySelector('#sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--sub-menu-bg');

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//PART 4
var topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function (e) {

    e.preventDefault();

    if (e.target.tagName !== 'A') return;

    console.log(e.target.textContent);

    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');

        subMenuEl.style.top = '0';
        return;
    }

    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    e.target.classList.add('active');

    //PART 5
    var clickedLink = null;
    menuLinks.forEach(function (link) {
        if (link.text === e.target.textContent) {
            clickedLink = link;
        }
    });

    if (clickedLink && clickedLink.subLinks) {

        subMenuEl.style.top = '100%';

        buildSubmenu(clickedLink.subLinks);
    } else {
        subMenuEl.style.top = '0';
    }
});

function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function (link) {
        var a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        subMenuEl.appendChild(a);
    });
}

subMenuEl.addEventListener('click', function (e) {
    e.preventDefault();

    subMenuEl.style.top = '0';

    topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
    });

    var mainEl = document.querySelector('main');
    var h1 = mainEl.querySelector('h1');
    h1.textContent = e.target.textContent;
});

topMenuEl.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') return;

    var clickedLink = null;
    menuLinks.forEach(function (link) {
        if (link.text === e.target.textContent){
            clickedLink = link;
        }
    });

    if (clickedLink && !clickedLink.subLinks) {
        var mainEl = document.querySelector('main');
        var h1 = mainEl.querySelector('h1');
        h1.textContent = clickedLink.text.charAt(0).toUpperCare() + clickedLink.text.slice(1);
    }

});