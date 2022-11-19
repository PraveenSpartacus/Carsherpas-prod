document.getElementsByTagName("body")[0].onresize = () => {
    // console.log("invoked!");
    svgResolution0 = 1920/3261;
    
    screenWidth = window.innerWidth;
    if(screenWidth < 1920) {
        document.getElementById("svg-container").setAttribute("height", (screenWidth/svgResolution0).toString()+"px");
    }
        
}

function isElementInViewport (el) {

// Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

document.getElementsByTagName("body")[0].onscroll = () => {
    // let circles = document.querySelectorAll("circle");
    let groups = document.querySelectorAll(".grp");
    groups.forEach(grp => {
        if(isElementInViewport(grp)){
            if(grp.id[4] == '2' || grp.id[4] == '3'){
                line = document.getElementById("Line_"+grp.id[4]+"_x");
                line.classList.add("highlight");
            }
            grp.classList.add("highlight");
        }
        else{
            grp.classList.remove("highlight");
            if(grp.id[4] == '2' || grp.id[4] == '3'){
                line = document.getElementById("Line_"+grp.id[4]+"_x");
                line.classList.remove("highlight");
            }
        }
    });
} 