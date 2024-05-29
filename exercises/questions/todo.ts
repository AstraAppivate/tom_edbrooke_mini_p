const element = document.getElementById('thing-2')!
element.remove()
const li = document.createElement('li')
li.innerText = 'TypeScript'
const list = document.getElementById('done-today')!
list.appendChild(li)
