// source to tutorial : https://www.youtube.com/watch?v=NiG2TnZiFL0&t=128s
// edited by me

window.addEventListener('keydown', function (e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault()
  }
}, false)

const t2 = document.querySelector('.t1')
const t1 = document.querySelector('.t2')

const move1 = 5
const move2 = 5

const triContainer = document.getElementById('tri-container')

function checkTri () {
  if (t2.style.top === '50px' && t1.style.left === '-125px') {
    console.log(t2.style.top)
    document.getElementById('eye').style.display = 'block'
  } else {
    document.getElementById('eye').style.display = 'none'
  }
}

window.addEventListener('load', () => {
  t1.style.position = 'relative'
  t1.style.left = 0
  t1.style.top = 0
})

window.addEventListener('keyup', (e) => {
  switch (e.keyCode) {
    case 37:
      t1.style.left = parseInt(t1.style.left) - move1 + 'px'
      break
    case 39:
      t1.style.left = parseInt(t1.style.left) + move1 + 'px'
      break
  }

  checkTri()
})

window.addEventListener('load', () => {
  t2.style.position = 'relative'
  t2.style.left = 0
  t2.style.top = 0
})

window.addEventListener('keyup', (e) => {
  switch (e.keyCode) {
    case 38:
      t2.style.top = parseInt(t2.style.top) - move2 + 'px'
      break
    case 40:
      t2.style.top = parseInt(t2.style.top) + move2 + 'px'
      break
  }
checkTri()

})
