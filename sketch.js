let container = document.querySelector('#grid')

var mouseDown = 0


for(let i=0; i<16; i++){
    for(let y=0; y<16; y++){
        let content = document.createElement('div')
        content.classList.add('square')
        container.appendChild(content)
        content.addEventListener('mousedown',() => { content.setAttribute("style", "background-color:red;"), mouseDown++ })
        content.addEventListener('mouseover',() => { if(mouseDown > 0){ content.setAttribute("style", "background-color:red;") }})
        content.addEventListener('mouseup',() => { content.setAttribute("style", "background-color:red;"),mouseDown-- })


    }
}

