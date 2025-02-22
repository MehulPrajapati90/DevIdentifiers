const navbar = document.querySelector('.navbar');

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky"): navbar.classList.remove("sticky");
}