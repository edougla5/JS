let plus = false
let mult = false
let divide = false
let sub = false
let equals = false
let ac = false

let screen = document.getElementById('innerText')
let acButton = document.getElementById('ac')
let numTot = 0
let numbers=false

function myFunc(a) {
    if(plus) {
        screen.innerText+=a
        numTot += a
        plus=false
    } else if(sub) {
        screen.innerText+=a
        numTot -= a
        sub=false
    } else if(divide) {
        screen.innerText+=a
        numTot /= a
        divide = false
    } else if(mult) {
        screen.innerText+=a
        numTot *= a
        mult = false
    } else if(screen.innerText='0') {
        numTot=a
        screen.innerText=a
    } else {
        numTot=a
    }
}

function opp(a) {
    if(a=='+') {
        plus=true
        screen.innerText+='+'
    }
    else if(a=='/') {
        screen.innerText+='/'
        divide=true
    }
    else if(a=='-') {
        screen.innerText+='-'
        sub=true
    }
    else if(a=='*') {
        screen.innerText+='*'
        mult=true
    }
    else if(a==0) {
        numTot = 0
        screen.innerText=numTot
    }
    else if(a=='=') {
        screen.innerText=numTot
    }
}

//set the numbers at one function and operators as another
//place numbers and operators on the screen on screen
/*
let numTot = 1
function operator(value) {
    if(value == 'plus')
        plus = true
    else if(value == 'minus')
        minus = true
    else if (value == 'multiply')
        multiply = true
    else if (value == 'divide')
        divide = true
    else if (value == 'equals') {
        screen.innerHTML = numTot
    }
    else if(value == 'subtract')
        subtract = true
    else if(value == 'ac') {
        screen.innerHTML = 0
        numTot = 0
    }
}

    let newNum

function myFunc(num) {
    if(plus) {
        numTot += num
        plus=false
    } else if(minus) {
        numTot-=num
        minus=false
    } else if(divide) {
        numTot/=num
        divide=false
    } else if(multiply) {
        numTot*= num
        multiply=false
    }
}
*/