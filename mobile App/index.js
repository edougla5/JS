let allMonths = document.getElementsByClassName('box')
let day29 = document.getElementById('box29')
let day30 = document.getElementById('box30')
let day31 = document.getElementById('box31')

// let firstEvent = document.getElementById('event1')
// let secondEvent = document.getElementById('event2')
// let thirdEvent = document.getElementById('event3')

let today = new Date()
let month = today.getMonth()
let monthName = 'January'
let changeMonth = document.getElementById('month')

//document.getElementById('date').innerHTML = today.getDay()

function monthCheck() {
if(month == 0)
    return 'january'
else if(month == 1) {
    return 'february'
}
else if(month == 2)
    return 'march'
else if(month == 3)
    return 'april'
else if(month == 4)
    return 'may'
else if(month == 5)
    return 'june'
else if(month == 6)
    return 'july'
else if(month == 7)
    return 'august'
else if(month == 8)
    return 'september'
else if(month == 9)
    return 'october'
else if(month == 10)
    return 'november'
else if(month == 11)
    return 'december'
}

changeMonth.innerHTML = monthCheck()
let year = document.getElementById('year')
let yearNum = Number(year.innerHTML)
console.log(yearNum)

function forwardMonth() {
    month++
    if(month == 12) {
        month = 0
        yearNum++
        year.innerHTML = yearNum
    }
    changeMonth.innerHTML = monthCheck()
    if(month == 5 || month == 4) {
        day31.style.display = 'none'
    } else
        day31.style.display = 'block'
}

function backMonth() {
    month--
    if(month == -1) {
        month = 11
        yearNum--
        year.innerHTML = yearNum
    }
    changeMonth.innerHTML = monthCheck()
    if(month == 5 || month == 4) {
        day31.style.display = 'none'
    } else
        day31.style.display = 'block'
}

let currentDay = today.getDate()
console.log(currentDay)
if(currentDay==29)
    day29.style.border = 'solid red'
else if(currentDay == 30)
    day30.style.border = 'solid red'
else if (currentDay == 31)
    day31.style.border = 'solid orange'
else {
    allMonths[currentDay-1].style.backgroundColor = 'white'
    allMonths[currentDay-1].style.color = 'black'
    allMonths[currentDay-1].style.borderColor = 'orangeRed'
    allMonths[currentDay-1].style.border = 'solid orangeRed'
}

let titleMonth = document.getElementById('title')
let eventsDisplay = document.getElementById('noEvents')
let firstEvent = document.getElementById('event1')
let secondEvent = document.getElementById('event2')
let thirdEvent = document.getElementById('event3')

// each index stores the day, mont, year and 3 event strings

let events = []
let u = 0
let numEvents = 0

function checkDate(a) {
    titleMonth.innerHTML = ''
    titleMonth.innerHTML += monthCheck(month) + ' ' + a
    if(!events[u])
        eventsDisplay.style.display = 'block';
}


function addEvent() {
    let newEvent = prompt('enter event information')
    if(newEvent != null) {
        events[u] = newEvent
    }
    firstEvent.innerHTML = events[u]
    u++;
}

//functions for hover effect
//why does this event run w/o being called?

// function makeEvent(a) {
//     let boxText = prompt()
//     event1.innerHTML += boxText
// }
// js emulates objects via constructor functions