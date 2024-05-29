const language = document.getElementById('lang')!
language.textContent = 'TypeScript'
const adjective = document.getElementById('adjective')!
adjective.remove()
const answer = document.createElement('img')
answer.src = 'https://media.giphy.com/media/dVdIu1HNxeKyqzkgPA/source.gif'
document.body.appendChild(answer)
