//good code is simple and well commentedvim 

//declaring new date object with 2 variables hours and minutes
//base clock that changes degree of hands based on different timezones


let hourChange = document.getElementById('hourHand')
let minuteChange = document.getElementById('minuteHand')

let timeDiff = 0


// reseting hours and minutes every second
// setInterval function uses miliseconds
setInterval (function() {

    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    if(hours+timeDiff>12)
    hours-=12

    document.getElementById('hours').innerHTML = hours + timeDiff
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    minutes*=6
    hours*=30

    hours-=90
    minutes-=180

    hours = hours +(timeDiff*30)

    hourChange.style.transform = 'rotate(' + hours + 'deg)'
    minuteChange.style.transform = 'rotate(' + minutes + 'deg)'

}, 1000)

// hands should be accurate. use ratios of a circle
// use clickable buttons instead of search box. more efficient unless import library

let atl = document.getElementById('atlLabel')
let tokyo = document.getElementById('tokyoLabel')
let anchorage = document.getElementById('anchorageLabel')
let hongKong = document.getElementById('hongKongLabel')
let paris = document.getElementById('parisLabel')
let sydney = document.getElementById('sydneyLabel')
let moscow = document.getElementById('moscowLabel')
let mumbai = document.getElementById('mumbaiLabel')

function searchAtl() { 
    let searching = document.getElementById('searchBar').value
    
    if(searching == 'atlanta') {
        timeDiff = 0
        atl.style.display = 'block'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
    } else if(searching == 'tokyo') {
        timeDiff = 1
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'block'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
    } else if(searching == 'anchorage') {
        timeDiff = 6
        atl.style.display = 'none'
        anchorage.style.display = 'block'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
    } else if(searching == 'hong kong')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
    } else if(searching == 'paris')  {
        timeDiff = 6
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'block'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
    } else if(searching == 'sydney')  {
        timeDiff = 3
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'block'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
    } else if(searching == 'moscow')  {
        timeDiff = 7
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'block'
        mumbai.style.display = 'none'
    } else if(searching == 'mumbai')  {
        timeDiff = -2
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'block'
    }
}

function atlantaTime() {
    timeDiff = 0
        atl.style.display = 'block'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function tokyoTime() {
    timeDiff = 1
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'block'
}

function anchorageTime() {
    timeDiff = 6
        atl.style.display = 'none'
        anchorage.style.display = 'block'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function hongKongTime() {
    timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function parisTime() {
    timeDiff = 6
    atl.style.display = 'none'
    anchorage.style.display = 'none'
    hongKong.style.display = 'none'
    tokyo.style.display = 'none'
    paris.style.display = 'none'
    sydney.style.display = 'none'
    moscow.style.display = 'none'
    mumbai.style.display = 'block'
}

function sydneyTime() {
    timeDiff = 3
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'block'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function moscowTime() {
    timeDiff = 7
    atl.style.display = 'none'
    anchorage.style.display = 'none'
    hongKong.style.display = 'none'
    tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'block'
}
    
 function mumbaiTime() {
        timeDiff = -2
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'block'
}   