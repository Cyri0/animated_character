const framePerRow = 3;
const framePerColumn = 4;
const imgSrc = "sprite.png"

let direction = "KeyS"

function initImage(){
    const viewPortEl = document.createElement("div")
    viewPortEl.className = "viewPort"
    viewPortEl.style.aspectRatio = `${framePerRow} / ${framePerColumn}`
    const imgEl = document.createElement("img")
    imgEl.src = imgSrc
    imgEl.style.width = (framePerRow * 100) + '%'

    viewPortEl.appendChild(imgEl)
    document.body.appendChild(viewPortEl)
    
    doSomeAnimation(imgEl)
}

initImage()

function doSomeAnimation(img){
    let offset = 0;
    setInterval(()=>{
        img.style.left = offset + "%"
        offset -= 100
        img.style.top = calculateVertical()
        if(offset <= (framePerRow *100)*-1)
            offset = 0
    }, 100)
}

function calculateVertical(){
    switch (direction) {
        case "KeyW": return "0%"; break;
        case "KeyA": return "-300%"; break;  
        case "KeyS": return "-200%"; break;
        case "KeyD": return "-100%"; break;
    }
}

document.addEventListener("keydown", (k)=>{
    direction = k.code
})

document.addEventListener("keyup", (k)=>{
    direction = "KeyS"
})