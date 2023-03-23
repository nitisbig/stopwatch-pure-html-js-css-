const action = document.querySelector('.action')
const disp = document.querySelector('.display')
const reset = document.querySelector('.reset')
const add = document.querySelector('.add')
const lists = document.querySelector('.lists')

let breakPoint = []

let t = {hr:0,min:0,sec:0}
let stop
function func(){
    t.sec++
    if(t.sec === 100){
        t.min++
        t.sec=0
        if(t.min === 60){
            t.hr++
            t.min = 0
        }
    }
    res.innerHTML=`${t.hr}:${t.min}:${t.sec}`
    stop = setTimeout(func,10)
}



const res = document.createElement('h2')
res.setAttribute('class', 'result')

disp.appendChild(res)
let state = true

reset.onclick = function(){
    t.hr = 0, t.min = 0, t.sec=0
    res.innerHTML = `${t.hr}:${t.min}:${t.sec}`
    clearTimeout(stop)
    lists.innerHTML = ''
    state =  true
    action.innerHTML = '<img src="./image/play_circle.svg" alt=""></img>'
}
let valueof = 0
add.onclick = function(){
    let val = res.innerHTML
    const list = document.createElement('li')
    list.setAttribute('class', 'text-red')
    lists.appendChild(list)
    breakPoint.push(val)
    list.innerHTML = breakPoint[valueof]
    valueof++
}
res.innerHTML = `${t.hr}:${t.min}:${t.sec}`

action.innerHTML = '<img src="./image/play_circle.svg" alt=""></img>'
action.addEventListener('click', function(){
    state?this.innerHTML = '<img src="./image/stop_circle.svg" alt=""></img>':this.innerHTML = '<img src="./image/play_circle.svg" alt=""></img>'
    state?func():clearTimeout(stop)
    state = !state
})