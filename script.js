const swup = new Swup()

$(function(){
    $('#header').load('/header.html');
})

$(function(){
    $('#wallpaper').load('/wallpaper.html');
})

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let sites = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  sites.forEach(user => {
    const isVibible =
      user.site.toLowerCase().includes(value) ||
      user.subFolder.toLowerCase().includes(value) ||
      user.url.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVibible)
  })
})

fetch("sites.json")
  .then(res => res.json())
  .then(data => {
    sites = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const subFolder = card.querySelector("[data-subfolder]")
      const site = card.querySelector("[data-site]")
      const url = card.querySelector("[data-url]")
      site.textContent = user.site
      subFolder.textContent = user.subFolder
      url.href = user.url
      //url.textContent = user.urlName
      userCardContainer.append(card)
      return { site: user.site, subFolder: user.subFolder, url: user.url, element: card }
    });
  })