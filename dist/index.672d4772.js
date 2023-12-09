class App {
    nav = document.querySelector(".navigation");
    btnToggleNav = document.querySelector(".nav-btn");
    parentElement = document.querySelector(".projects");
    projects = [
        {
            className: "project",
            name: "Forkify",
            span: "Desktop App",
            img: "https://i.imgur.com/Iwk6T1T.jpg",
            description: " Project employs JavaScript for manipulation, API interaction; SCSS for styling, HTML for content structure\u2014blending dynamic functionality with advanced design.",
            github: "https://github.com/SpizhovyiMaxDev/forkify-code",
            demo: "https://forkify-sprd.netlify.app",
            icon: "\uD83D\uDCDD"
        },
        {
            className: "project reverse",
            name: "WeatherNest",
            span: "Desktop App",
            img: "https://i.imgur.com/r8RPf7i.png",
            description: " Facilitates city-specific inquiries, data retention, and in-depth analysis of meteorological information.",
            github: "https://github.com/SpizhovyiMaxDev/weather-nest",
            demo: "https://weathernest-sprd.netlify.app",
            icon: "\uD83C\uDF21\uFE0F"
        },
        {
            className: "project",
            name: "Omnifood",
            span: "Responsive",
            img: "https://i.imgur.com/kAZZJoi.jpg",
            description: "Explore Omnifood, a desktop web app offering real-time recipes and diverse cooking options, making culinary inspiration accessible with detailed instructions.",
            github: "https://github.com/SpizhovyiMaxDev/omnifood",
            demo: "https://omnifood-sprd.netlify.app",
            icon: "\uD83C\uDF7D\uFE0F"
        },
        {
            className: "project reverse",
            name: "Mapty",
            span: "Desktop App",
            img: "https://i.imgur.com/lUAJPMY.jpg",
            description: "Experience Mapty's seamless blend of JavaScript, HTML, and CSS for a responsive and user-friendly platform, optimizing your fitness journey.",
            github: "https://github.com/SpizhovyiMaxDev/Mapty",
            demo: "https://mapty-sprd.netlify.app",
            icon: "\uD83D\uDDFA\uFE0F"
        },
        {
            className: "project",
            name: "ProduX",
            span: "Responsive",
            img: "https://i.imgur.com/6JmyuOc.png",
            description: " I did this website quickly, the sense of that project to see the difference between the NodeList and HTMLCollection a bit dipper, you can add a new products, sort them...",
            github: "https://github.com/SpizhovyiMaxDev/ProduX",
            demo: "https://produx-sprd.netlify.app",
            icon: "\uD83D\uDED2"
        },
        {
            className: "project reverse",
            name: "Bankist",
            span: "(Desktop)",
            img: "https://i.imgur.com/AuP4G2A.jpg",
            description: " Bankist seamlessly integrates JavaScript, HTML, and CSS for a smooth, secure user experience, empowering effortless financial management and navigation.",
            github: "https://github.com/SpizhovyiMaxDev/banking",
            demo: "https://bankist-sprd.netlify.app",
            icon: "\uD83D\uDCB8"
        }
    ];
    constructor(){
        this._init();
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
    _init() {
        if (!this.projects.length) return;
        const markup = this.projects.map((project)=>{
            return `
                <div class = "${project.className}"> 
                    <img src="${project.img}" alt = "${project.name} project" class = "project__image"/>
                    <div class = "project__text"> 
                        <h3 class = "project__heading">
                            ${project.name} <span>(${project.span})</span> ${project.icon}
                        </h3>
                        <p class = "project__description">
                            ${project.description}
                        </p>

                        <div class="project__btns">
                            <a target="_blank" href="${project.github}" class="project__btn project__btn--github">
                                Github
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                            <a target="_blank" href="${project.demo}" class="project__btn project__btn--project">
                                Demo 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
        this.parentElement.insertAdjacentHTML("beforeend", markup);
    }
}
new App();

//# sourceMappingURL=index.672d4772.js.map
