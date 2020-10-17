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

    if(hours>12)
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

function searchAtl() {
    let searching = document.getElementById('searchBar').value
    let atl = document.getElementById('atlLabel')
    let tokyo = document.getElementById('tokyoLabel')
    let anchorage = document.getElementById('anchorageLabel')
    let hongKong = document.getElementById('hongKongLabel')
    
    if(searching == 'atlanta') {
        atl.style.display = 'block'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
    } else if(searching == 'tokyo') {
        timeDiff = 1
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'block'
    } else if(searching == 'anchorage') {
        timeDiff = 4
        atl.style.display = 'none'
        anchorage.style.display = 'block'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
    } else if(searching == 'hong kong')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
    } else if(searching == 'paris')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
    } else if(searching == 'sydney')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
    } else if(searching == 'moscow')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
    } else if(searching == 'mumbai')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
    }
}