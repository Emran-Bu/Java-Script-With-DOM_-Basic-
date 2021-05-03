let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(this.elements[0])
    // console.log(this.elements['email'])
    let isvalid = false
    let formData = {};
    [...this.elements].forEach(el => {
      // console.log(el.type, el.name, el.value)
      if (el.type !== 'submit') {
        isvalid = validator(el)
        if (isvalid) {
          formData [el.name] = el.value
        } else {
          el.classList.add('is-invalid')
          alert(`${el.name} is Required`)
        }
      }
    })

    if (isvalid) {
      console.log(formData)
      this.reset()
    }

} )

function validator (el){
  if (!el.value) {
    return false
  }
  return true
}
