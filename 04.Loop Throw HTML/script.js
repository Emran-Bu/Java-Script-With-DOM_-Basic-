let list = document.getElementsByTagName('li')
// console.log(list)

// let item = Array.prototype.slice.apply(list)
// let item = Array.from(list)
// console.log(item)
let item = [...list]
item.forEach((li, ind) => {
  let text = li.innerHTML
  li.innerHTML = `(${ind + 1}) ${text}`
})
