const links=document.querySelectorAll(".smooth-scroll");links.forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("href").substring(1),l=document.getElementById(t);l&&l.scrollIntoView({behavior:"smooth"})})});const filterButtons=document.querySelectorAll(".filter button"),projectImages=document.querySelectorAll(".project");function mobileNav(){var e=document.getElementById("mobileLinks");"flex"===e.style.display?e.style.display="none":e.style.display="flex"}filterButtons.forEach(e=>{e.addEventListener("click",()=>{let t=e.textContent.toLowerCase();if(filterButtons.forEach(e=>e.classList.remove("active")),e.classList.add("active"),"all"===t){projectImages.forEach(e=>e.classList.remove("hidden"));return}projectImages.forEach(e=>{e.classList.add("hidden"),e.id===t&&e.classList.remove("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".moreinfo button"),t=document.querySelectorAll(".infobox > div");e.forEach(l=>{l.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("active")),l.classList.add("active");let s=l.className.split(" ")[0];t.forEach(e=>e.classList.remove("active")),document.querySelector(`.infobox .${s}`).classList.add("active")})})});