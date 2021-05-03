let name = document.getElementById('name')
// console.log(name)
name.addEventListener('keypress', function (event){
  if (event.key === 'Enter') {
    // console.log(event.target.value)
    document.getElementById('P-1').innerHTML = `Your name is ${event.target.value}`
    event.target.value = ''
  }
})
