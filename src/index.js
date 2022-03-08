import getCssSelector from 'css-selector-generator'

document.body.addEventListener('click', (event) => {
  const selector = getCssSelector(event.target)
  console.log(selector)
})
