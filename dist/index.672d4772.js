class App {
    nav = document.querySelector(".navigation");
    btnToggleNav = document.querySelector(".nav-btn");
    constructor(){
        this.btnToggleNav.addEventListener("click", this._toggleNavigation.bind(this));
        this.nav.addEventListener("click", this._scrollToSection.bind(this));
    }
    _toggleNavigation() {
        this.nav.classList.toggle("show-mobile-nav");
    }
    _scrollToSection(e) {
        e.preventDefault();
        const link = e.target.closest(".main-nav-list__link");
        if (!link) return;
        const id = link.getAttribute("href");
        this.nav.classList.remove("show-mobile-nav");
        window.innerWidth > 944 ? document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        }) : setTimeout(()=>document.querySelector(id).scrollIntoView({
                behavior: "smooth"
            }), 500);
    }
}
new App();

//# sourceMappingURL=index.672d4772.js.map
