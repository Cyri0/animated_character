const framePerRow = 3;
const framePerColumn = 4;
const imgWidth = 144;
const imgHeight = 256;

const frameWidth = imgWidth / framePerRow;
const frameHeight = imgHeight / framePerColumn;
const imgSrc = "sprite.png"

function initImage(){
    const viewPortEl = document.createElement("div")
    viewPortEl.className = "viewPort"

    const imgEl = document.createElement("img")
    imgEl.src = imgSrc

    

    viewPortEl.appendChild(imgEl)
    document.body.appendChild(viewPortEl)
}
initImage()