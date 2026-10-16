count=0
function increment(){
    if(count<11){
    document.getElementById('count').innerHTML=count++
    }
    if(count==11){
        document.getElementById('btn1').style.background='blue'
        document.getElementById('count').disabled()=true
    }
    
}
function decrement(){
     if(count>=1){
    document.getElementById('count').innerHTML=--count
    }
    if(count==0){
        document.getElementById('count').disabled()=true
    }
     if(count<10){
        document.getElementById('btn1').style.background='rgb(77, 230, 77)'
        document.getElementById('count').disabled=false
    }
}
function reset(){
    document.getElementById('count').innerHTML=count=0
}