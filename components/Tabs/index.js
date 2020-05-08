// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabContainer = document.querySelector('.topics')
console.log(tabContainer)


function tabMaker(tabTopic){
    const tab = document.createElement('div')

    tabContainer.appendChild(tab)

    tab.classList.add('tab')

    return tab
}

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response => {
    // const tabsTopic = response.data.topics[1]
    // console.log(tabsTopic)
    const tabsName = response.data.topics
    console.log(tabsName)

    tabsName.forEach(tabInfo => {
        const tab = tabMaker(tabInfo)
        tab.textContent = `${tabInfo}`
    }

    )
    // for(let i = 0; i < tabsName.length; i++){
    //     const newTab = tabMaker(tabsName[i])
    //     newTab.textContent = `${tabsName[i]}`
    // }
})
.catch(error => {
    console.log(error)
})

