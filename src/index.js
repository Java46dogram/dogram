console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");


let anchors = 
document.querySelectorAll(".thumbnails-anchor"); //all HTML elements
for(let i = 0; i < anchors.length; i++){
    anchors[i].addEventListener("click", function(event)  {
        event.preventDefault();
        setDetails(anchors[i]);
    })
}

function setDetails(anchor){
    console.log("anchor element was pressed", anchor);
    detailsImage.setAttribute("src",anchor.getAttribute("href"));
    detailsTitle.textContent = anchor.getAttribute("data-details-title");
    
    
    
}