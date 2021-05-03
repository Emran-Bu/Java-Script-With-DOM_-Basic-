let list = document.getElementById('list')
// console.log(list)
let li = document.createElement('li')
li.className = 'list-group-item'
li.innerHTML = 'Four'
list.appendChild(li)
// console.log(li)
let firstChild = list.firstElementChild
// console.log(firstChild)

//insert li
setTimeout(() => {
firstChild.innerHTML = firstChild.innerHTML + ' (Modified)'
firstChild.classList.add('text-danger')
firstChild.style.background = 'black'
}, 5000)

let lastChild = list.lastElementChild
// console.log(lastChild)

setTimeout(() => {
  lastChild.innerHTML = lastChild.innerHTML + ' (Js Created)'
  lastChild.classList.add('bg-success', 'text-light')
}, 3000)

// Remove li
let lis = document.querySelector('li')
setTimeout(() => {
  lis.nextElementSibling.remove()
})

// Remove li 2nd step
// let lis = document.querySelector('li')
// lis.nextElementSibling.remove()
