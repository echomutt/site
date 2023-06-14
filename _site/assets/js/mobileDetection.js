// 428px was the widest phone size on chrome's mobile webdev options
// var mobileCutoffWidth = 428

function setStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}


function initate() {
    const { userAgent } = window.navigator;

    if(userAgent.includes("Mobi") || userAgent.toLowerCase().includes("mobile")) {
        console.log("mobile device detected. changing style sheet.");
        setStyleSheet("/assets/css/stylesMobile.css");
    }
    else {
        console.log("mobile device not detected.");
    }

    // doesn't work :(
    // if(window.innerWidth < 964) {
    //     console.log("small, making bigger!");
    //     window.resizeTo(964, 2656.13);
    // }
}

console.log("mobile detection script has run");
window.onload = initate;