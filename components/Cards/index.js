// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsCont = document.querySelector('.cards-container')

function articleMaker(cardAttr){
    const {cardHead, imageUrl, cardAuthorName} = cardAttr

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    cardsCont.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCont)
    imgCont.appendChild(img)
    author.appendChild(authorName)

    card.classList.add('card')
    author.classList.add('author')
    headline.classList.add('headline')
    imgCont.classList.add('img-container')

    headline.textContent = `${cardHead}`
    img.src = `${imageUrl}`
    authorName.textContent = `${cardAuthorName}`

    return card

}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    const articles = response.data.articles
    const articlesTopics = Object.keys(articles)
    console.log(articles)
    console.log(articlesTopics)

    for(let i = 0; i < articlesTopics.length; i++){
       const item = articlesTopics[i]
       console.log(item)
       const itemInfo = articles[`${item}`]
       console.log(itemInfo)
       itemInfo.forEach(cardInfo =>{
        const card = articleMaker({cardHead: cardInfo.headline, imageUrl: cardInfo.authorPhoto, cardAuthorName: cardInfo.authorName})
       })
    }

})
.catch(error => {
    console.log(error)
})


// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(response => {
//     const articles = response.data.articles
//     const articlesTopics = Object.keys(articles)

//     const javascript = response.data.articles.javascript

//     javascript.forEach(cardInfo =>{
//         const card = articleMaker({cardHead: cardInfo.headline, imageUrl: cardInfo.authorPhoto, cardAuthorName: cardInfo.authorName})
//     })

//     const bootstrap = response.data.articles.bootstrap

//     bootstrap.forEach(cardInfo =>{
//         const card = articleMaker({cardHead: cardInfo.headline, imageUrl: cardInfo.authorPhoto, cardAuthorName: cardInfo.authorName})
//     })

//     const technology = response.data.articles.technology

//     technology.forEach(cardInfo =>{
//         const card = articleMaker({cardHead: cardInfo.headline, imageUrl: cardInfo.authorPhoto, cardAuthorName: cardInfo.authorName})
//     })

//     const jquery = response.data.articles.jquery

//     jquery.forEach(cardInfo => {
//         const card = articleMaker({cardHead: cardInfo.headline, imageUrl: cardInfo.authorPhoto, cardAuthorName: cardInfo.authorName})
//     })

//     const node = response.data.articles.node

//     node.forEach(cardInfo =>{
//         const card = articleMaker({cardHead: cardInfo.headline, imageUrl: cardInfo.authorPhoto, cardAuthorName: cardInfo.authorName})
//     })

// })
// .catch(error => {
//     console.log(error)
// })