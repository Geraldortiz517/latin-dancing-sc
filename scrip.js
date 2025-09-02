function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    //close menu
    const links =document.querySelectorAll(".menu-links a");
    links.forEach(
      link =>{
        link.addEventListener("click", ()=>{
          menu.classList.remove("open");
          icon.classList.remove("open");
        })
      }
    )
  }