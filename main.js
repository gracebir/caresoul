const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i")
const firstImg = document.querySelectorAll("img")[0]

let isDragStart = false, prevPageX, prevSrollLeft;
let firstImgWidth = firstImg.clientWidth + 14

arrowIcons.forEach((icon)=> {
    icon.addEventListener("click", ()=> {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault()
    carousel.classList.add("dragging")
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevSrollLeft - positionDiff
}

const dragStart = (e) => {
    isDragStart = true
    prevPageX = e.pageX
    prevSrollLeft = carousel.scrollLeft
   
}

const drapStop = (e) => {
    e.preventDefault()
    isDragStart = false
    console.log("false")
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", drapStop)
