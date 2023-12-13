document.addEventListener("DOMContentLoaded", function () {
    // Part 1
    const mainEl = document.querySelector("main");
    mainEl.style.backgroundColor = 'var(--main-bg)';
    mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
    mainEl.classList.add("flex-ctr");
    document.body.appendChild(mainEl);
  
    // Part 2
    const topMenuEl = document.getElementById("top-menu");
    topMenuEl.style.height = "100%";
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
    topMenuEl.classList.add("flex-around");
  
    const menuLinks = [
      { text: 'about', href: '/#' },
      { text: 'catalog', href: '#', subLinks: [
          { text: 'all', href: '/catalog/all' },
          { text: 'top selling', href: '/catalog/top' },
          { text: 'search', href: '/catalog/search' },
        ]
      },
      { text: 'orders', href: '#', subLinks: [
          { text: 'new', href: '/orders/new' },
          { text: 'pending', href: '/orders/pending' },
          { text: 'history', href: '/orders/history' },
        ]
      },
      { text: 'account', href: '#', subLinks: [
          { text: 'profile', href: '/account/profile' },
          { text: 'sign out', href: '/account/signout' },
        ]
      },
    ];
  
    menuLinks.forEach(function (link) {
      const linkEl = document.createElement("a");
      linkEl.href = link.href;
      linkEl.text = link.text;
      topMenuEl.appendChild(linkEl);
    });
  
    
    const subMenuEl = document.getElementById("sub-menu");
    subMenuEl.style.height = "100%";
    subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
    subMenuEl.classList.add("flex-around");
  
    
    function buildSubMenu(subLinks) {
  
      subMenuEl.innerHTML = '';
      subLinks.forEach(link => {
        const subLinkEl = document.createElement("a");
        subLinkEl.href = link.href;
        subLinkEl.textContent = link.text;
        subMenuEl.appendChild(subLinkEl);
      });
    }
  
    topMenuEl.addEventListener("click", function (e) {
      e.preventDefault();
  
      if (e.target.tagName === 'A') {
        const linkClicked = e.target;
        const linkObject = menuLinks.find(link => link.text.toLowerCase() === linkClicked.textContent.toLowerCase());
  
        const topMenuLinks = topMenuEl.getElementsByTagName("a");
  
        Array.from(topMenuLinks).forEach(link => link.classList.remove("active"));
        linkClicked.classList.toggle("active");
  
        console.log(linkClicked.textContent);
  
        if (linkClicked.classList.contains("active")) {
          if (linkObject && linkObject.subLinks) {
            subMenuEl.style.top = "100%";
            buildSubMenu(linkObject.subLinks);
          } else {
            subMenuEl.style.top = "0";
          }
        }
      }
    });
  });