class MobileNavbar {
    constructor(mobileMenu, navLista, navLista) {
    this. mobileMenu = document.querySelector(mobileMenu);
    this.navLista = document.querySelector(navLista);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activClass = "active";

    this.handleClike = this.handleClike.bind(this);
    }

    handleClike() {
        console.log(this);
        this.navLista.classLista.toggle(this.activeClass)
    }

    addClikeEvent() {
        this.mobileMenu.addEventListener ("click", () => console.log ("hey "));
    }
    Init() {
        if (this.mobileMenu){
            this.addClikeEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-lista",
    ".nav-list li",
)
mobileNavbar.Init();