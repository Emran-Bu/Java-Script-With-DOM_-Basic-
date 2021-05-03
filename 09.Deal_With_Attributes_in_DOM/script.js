let list = document.getElementById('list')
// console.log(list.attributes)
// console.log(list.getAttributeNames())
// console.log(list.getAttributeNode('class'))
// console.log(list.getAttributeNode('id'))
// console.log(list.getAttribute('id'))
// console.log(list.id)
// console.log(list.className)
// console.log(list.classList)
// list.setAttribute('name', 'Last-Item')



// let lastChild = list.firstElementChild.cloneNode(true)
let lastChild = list.firstElementChild.cloneNode()
lastChild.innerHTML = 'Four'
list.appendChild(lastChild)

// lastChild.id = 'Last-Item'
lastChild.setAttribute('id', 'Last-Item')

let attr = document.createAttribute('title')
attr.value = 'I am title'
lastChild.setAttributeNode(attr)
