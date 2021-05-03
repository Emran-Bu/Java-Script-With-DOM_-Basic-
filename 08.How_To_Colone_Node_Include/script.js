let list = document.getElementById('list')
// let lastChild = list.firstElementChild.cloneNode(true)
let lastChild = list.firstElementChild.cloneNode()
lastChild.innerHTML = 'Four'
list.appendChild(lastChild)
