//good code is simple and well commentedvim 

//declaring new date object with 2 variables hours and minutes
//base clock that changes degree of hands based on different timezones

let currentTime = new Date()

let hourChange = document.getElementById('hourHand')
let minuteChange = document.getElementById('minuteHand')

let extraHours = -90
let extraMinutes = -180

let hours = currentTime.getHours() * 30
if(hours>12)
hours-=12
hours*=30

let minutes = currentTime.getMinutes() * 6

hourChange.style.transform = 'rotate(' + hours + 'deg)'
minuteChange.style.transform = 'rotate(' + minutes + 'deg)'

document.getElementById('hoursId').innerHTML = hours  / 6
document.getElementById('minutesId').innerHTML = minutes / 30

// reseting hours and minutes every second
// setInterval function uses miliseconds
setInterval (function() {
    hours = currentTime.getHours()
    minutes = currentTime.getMinutes()

    if(hours>12)
    hours-=12
    document.getElementById('hoursId').innerHTML = hours
    document.getElementById('minutesId').innerHTML = minutes

    minutes*=6
    hours*=30

    hours-=90
    minutes-=180

    hours+=extraHours
    minute+=extraMinutes

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
    
    if(searching == 'atl') {
        extraHours = 0
        extraMinutes = 0
        atl.style.display = 'block'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
    } else if(searching == 'tokyo') {
        extraHours = 100
        extraMinutes = 100
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'block'
    } else if(searching == 'anchorage') {
        atl.style.display = 'none'
        anchorage.style.display = 'block'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
    } else if(searching == 'hong kong')  {
        extraHours = 200
        extraMinutes = 300
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
    }
}