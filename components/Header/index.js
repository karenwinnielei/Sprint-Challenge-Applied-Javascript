// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headContainer = document.querySelector('.header-container')

function Header(headerAttr) {
    const {date, title, temp} = headerAttr
    const topHead = document.createElement('div')
    const theDate = document.createElement('span')
    const h1 = document.createElement('h1')
    const theTemp = document.createElement('span')

    headContainer.appendChild(topHead)
    topHead.appendChild(theDate)
    topHead.appendChild(h1)
    topHead.appendChild(theTemp)

    topHead.classList.add('header')
    theDate.classList.add('date')
    theTemp.classList.add('temp')

    theDate.textContent = `${date}`
    h1.textContent = `${title}`
    theTemp.textContent =  `${temp}`

    return topHead
    
}
Header({date: `SMARCH 28, 2019`, title: `Lambda Times`, temp: `98°`})