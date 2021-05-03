//first step

let li = document.createElement('li')
li.className = 'list-group-item'

li.setAttribute('title', 'I am item')
li.innerHTML = 'Four'

let list = document.getElementById('list')
list.appendChild(li)

console.log(li)

// second step

let emran = createElement('li', 'Five', 'list-group-item')

let ehav = document.getElementById('list')
ehav.appendChild(emran)

function createElement(tagName, innerHTML, className){
  let tag = document.createElement(tagName)
  tag.innerHTML = innerHTML
  tag.className = className || ''
  return tag
}

//Third Step

let p1 = createElement('p', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'lead' )

let p2 = createElement('p', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'lead' )

let eh = document.getElementById('cont')
// eh.appendChild(p1)
// eh.appendChild(p2)
eh.append(p2, p1)
console.log(eh)
function createElement(tagName, innerHTML, className) {
  let tags = document.createElement(tagName)
  tags.innerHTML = innerHTML || ''
  tags.className = className || ''
  return tags
}

//Fourth Step (creation Div) insertAdjacentElement
let p3 = createElement2('p', 'Lorem ipsum dolor sit amet, consectetur adip ut aliquip ex ea commodo consequat.', 'lead' )

let p4 = createElement2('p', 'Lorem ipsum dolor sit amet, consectetur adipisiullamco laboris nisi ut aliquip ex ea commodo consequat.', 'lead' )


let div = createElement('div')

div.className = 'list'
append(div, [p3, p4])
console.log(div)

// let con = document.querySelector('.container')
// con.appendChild(div)

list.insertAdjacentElement('beforebegin', div)
// list.insertAdjacentElement('afterbegin' , div)
// list.insertAdjacentElement('beforeend', div)
// list.insertAdjacentElement('afterend', div)

function createElement2(tagName, innerHTML, className) {
  let tags = document.createElement(tagName)
  tags.innerHTML = innerHTML || ''
  tags.className = className || ''
  return tags
}

function append(parent, children){
  children.forEach(child => parent.appendChild(child))
}
