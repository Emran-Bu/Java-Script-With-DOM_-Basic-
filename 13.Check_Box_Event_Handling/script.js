let name = document.getElementById('name')
// console.log(name)
name.addEventListener('keypress', function (event){
  if (event.key === 'Enter') {
    // console.log(event.target.value)
    document.getElementById('P-1').innerHTML = `Your name is ${event.target.value}`
    event.target.value = ''
  }
})


//checkbox

let skills = document.getElementsByName('Skills');
let result = document.getElementById('result')

let checkedSkills = [];

[...skills].forEach(skill => {
  skill.addEventListener('change', function (event) {
    // console.log(event.target.checked)
    if (event.target.checked) {
      checkedSkills.push(event.target.value)
      outputSkills(result, checkedSkills)
      // console.log(checkedSkills)
    } else {
      let ind = checkedSkills.indexOf(event.target.value)
      checkedSkills.splice(ind, 1)
      outputSkills(result, checkedSkills)
      // console.log(checkedSkills)
    }
  })
})

function outputSkills(parent, skills){
  let result = ''
  skills.forEach((skill, index) => {
    result += `(${index + 1}) ${skill} `
  })
  parent.innerHTML = result
}
