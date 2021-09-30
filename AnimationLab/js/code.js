window.onload = function() {
    gsap.to(document.getElementsByClassName("fullwrapper"), 2, {opacity:1})
}

document.body.addEventListener('mouseover',function(e) {
    if (e.target.classList.contains("fullwrapper") || e.target.classList.contains("twoby3holder") || e.target.classList.contains("oneby3")) {
        // do nothing
    }
    else {
        gsap.to(e.target, 1, {backgroundColor:'#FF3333'})
    }
});

document.body.addEventListener('mouseout',function(e) {
    if (e.target.classList.contains("fullwrapper") || e.target.classList.contains("twoby3holder") || e.target.classList.contains("oneby3")){
        // do nothing
    }
    else {
        //just snaps back cause it doesn't know what to fade to
        gsap.to(e.target, 1, {backgroundColor:''})
    }
});

document.body.addEventListener('click',function(e) {
    if (e.target.classList.contains("fullwrapper") || e.target.classList.contains("twoby3holder") || e.target.classList.contains("oneby3")){
        // do nothing
    }
    else {
        //just snaps back cause it doesn't know what to fade to
        gsap.to(e.target, 1, {opacity:0})
    }
});