const btndiv = document.getElementById('btn/')
btndiv.addEventListener('click', () => {
  console.log('btndiv clicked')
  display.value += '/'
})
const btnmul = document.getElementById('btnx')
btnmul.addEventListener('click', () => {
  console.log('btnmul clicked')
  display.value += '*'
})
const btnsub = document.getElementById('btn-')
btnsub.addEventListener('click', () => {
  console.log('btnsub clicked')
  display.value += '-'
})
const btnadd = document.getElementById('btn+')
btnadd.addEventListener('click', () => {
  console.log('btnadd clicked')
  display.value += '+'
})
const btnclr = document.getElementById('btnc')
btnclr.addEventListener('click', () => {
  console.log('btnclr clicked')
  display.value = ''
})
const btndot = document.getElementById('btn.')
btndot.addEventListener('click', () => {
  console.log('btndot clicked')
  display.value += '.'
})
const btnequ = document.getElementById('btn=')

btnequ.addEventListener('click', () => {
  console.log('btnequ clicked')
  display.value = eval(display.value) 
})
const display = document.getElementById('displayId')

const btns = []
for (let i = 0; i < 10; i++) {
  btns[i] = document.getElementById('btn' + i)
  btns[i].addEventListener('click', () => {
    console.log('btn' + i + 'clicked')
    display.value += i;
  })
}


var input = document.getElementById('btn=');
btnequ.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn=").click();
        console.log('btnequ clicked')
    }
})


