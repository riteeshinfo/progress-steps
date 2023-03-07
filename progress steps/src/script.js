const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.getElementById('.circle')

let activecircle = 1
next.addEventListener('click', () =>{
    activecircle++
    if(activecircle > circle.length){
        activecircle = circle.length
        
    }
    update()
})
prev.addEventListener('click',() =>{
    activecircle--
    if(activecircle == 1){
        activecircle == 1
    }
    update()
})
function update() {
    circles.foreach((circles, ids) => {
        if(idx < activecircle){
            circle.classList.add('active')
            
        }else{
            circle.classList.remove('active')
        }
    })
    const active = document.getElementById('active')
    progress.style.width=(active.length) -1 / (cirlces.length)-1 *100 +'%'
    if(activecircle==1){
        prev.disabled = true
    }else if(activecircle == circles.length){
        next.Disabled = true
    }else{
        prev.disabled = flase
        next.Disabled = flase
    }
}