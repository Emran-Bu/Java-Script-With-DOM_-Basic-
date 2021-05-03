let list = document.getElementById('list')
// let lastChild = list.firstElementChild.cloneNode(true)
let lastChild = list.firstElementChild.cloneNode()
lastChild.innerHTML = 'Four'
list.appendChild(lastChild)

//style
let title = document.getElementById('title')
// title.style.color = 'red'
// title.style.color = '#45f89a'
// title.style.color = 'rgb(150, 250, 40)'
// title.style.fontSize = '20px'
// title.style.background = 'red'

//
let styleOBJ = {
  background: 'yellow',
  color: 'blue',
  fontSize: '30px'
};
[...list.children].forEach(li => Object.assign(li.style, styleOBJ));
// Object.assign(list.style, styleOBJ)
