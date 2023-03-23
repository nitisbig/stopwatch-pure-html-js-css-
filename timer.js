let t = {hr:0,min:0,sec:0}
function func(){
    t.sec++
    if(t.sec === 60){
        t.min++
        t.sec=0
        if(t.min === 60){
            t.hr++
            t.min = 0
        }
    }
    console.log(`${t.hr}:${t.min}:${t.sec}`)
    setTimeout(func,10)
}

func()