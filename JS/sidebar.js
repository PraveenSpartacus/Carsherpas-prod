const hamburger = document.getElementById("hamburger");

hamburger.onclick = () => {
    document.getElementById("hero").classList.add("sidebar-activate");
}

const sidebarBack = document.getElementById("side-back");

sidebarBack.onclick = () => {
    document.getElementById("hero").classList.remove("sidebar-activate");
}


document.body.onload = (e) => {
    console.log('loaded');
    setTimeout(()=>{
        document.body.classList.remove('not_loaded');
    },2000);
    
}
