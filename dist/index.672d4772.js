class App {
    nav = document.querySelector(".navigation");
    btnToggleNav = document.querySelector(".nav-btn");
    constructor(){
        this.btnToggleNav.addEventListener("click", this._toggleNavigation.bind(this));
    }
    _toggleNavigation() {
        this.nav.classList.toggle("show-mobile-nav");
    }
}
new App();

//# sourceMappingURL=index.672d4772.js.map
