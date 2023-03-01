(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.link__menu');
    const closeMenu = document.querySelector('.nav__close');
    const menuLinks = document.querySelectorAll('.link__menu a[href^="#"]');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('link__menu--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('link__menu--show');
    });

    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", () =>{
            menu.classList.remove('link__menu--show')
        })
    })

    


})();