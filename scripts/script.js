const carrousel = document.getElementById('carrusel')

let isDragStart = false, prevPageX, prevScrollLeft

const dragStart = (e) => {
    isDragStart = true;
    prevPageX =  e.pageX
    prevScrollLeft = carrousel.scrollLeft
}

const dragging = (e) => {
   if(!isDragStart) return;
   e.preventDefault()
   let positionDiff = e.pageX - prevPageX
   carrousel.scrollLeft = prevScrollLeft - positionDiff
   carrousel.scrollLeft = e.pageX
}

const dragStop = () =>{
    isDragStart: false
}

carrousel.addEventListener('mousedown', dragStart)
carrousel.addEventListener('mousemove', dragging)
carrousel.addEventListener('mouseup', dragStop)

