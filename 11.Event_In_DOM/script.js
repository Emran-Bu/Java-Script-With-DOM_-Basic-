let list = document.getElementById('list')
// let lastChild = list.firstElementChild.cloneNode(true)
let lastChild = list.firstElementChild.cloneNode()
lastChild.innerHTML = 'Four'
list.appendChild(lastChild)

//Alert Event btn

let btn = document.getElementById('btn')
btn.addEventListener('click', function(e){
  alert('i have clicked')
});

//remove item simple Rule
// [...list.children].forEach(li => {
//   li.onclick = function(e) {
//     e.target.remove()
//   }
// })

//remove item simple 2nd  Rule
list.addEventListener('click', function(e){
  if (this.contains(e.target)) {
      e.target.remove()
  }
})
//Event btn click and new button create

let item = document.getElementById('btn-2')
item.addEventListener('click', function(em){
  let lis = list.lastElementChild.cloneNode(true)
  lis.innerHTML = 'New-item'
  list.appendChild(lis)
})

//event box

let box = document.getElementById('box')
box.addEventListener('mousemove', function(e){
  document.getElementById('x-value').innerHTML = e.offsetX
  document.getElementById('y-value').innerHTML = e.offsetY
  // document.getElementById('x-value').innerHTML = e.clientX
  // document.getElementById('y-value').innerHTML = e.clientY
  // alert('i have clicked')
  //
  if (e.offsetX === 50 && e.offsetY) {
      alert('50, 50')
  }
})
