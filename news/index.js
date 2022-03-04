let app = document.getElementById('app')
let AllElement = Array.from(app.children)
let ret = []
let type = 'text'
AllElement.forEach(item => {
  console.log( item.innerHTML.includes('bold'));
  if (item.innerHTML.includes('<b>')||item.innerHTML.includes('bold')) {
    type = 'bold'
  }else if (item.innerHTML.includes('<img')) {
    type = 'img'
  } else {
    type = "text"
  }
  ret.push({
    type,
    detail:item.innerText
  })
})
console.log(ret)