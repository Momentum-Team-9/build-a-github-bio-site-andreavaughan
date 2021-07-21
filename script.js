const root = document.getElementById('root')
const about = document.getElementById('about')
const bio = document.getElementById('bio')

fetch('https://api.github.com/users/andreavaughan')
.then(response => response.json())
.then(data => {
    const myName = document.createElement('h1')
    myName.innerText = data.name
    root.appendChild(myName)

    const nameParagraph = document.createElement('p')
    nameParagraph.innerText = 'Name ' + data.name
    about.appendChild(nameParagraph)

    const gitHubLink = document.createElement('a')
    const linkOne = document.createTextNode('GitHub URL ' + data.html_url)
    gitHubLink.appendChild(linkOne)
    gitHubLink.href = data.html_url
    gitHubLink.target = "_blank"
    about.appendChild(gitHubLink)

    const company = document.createElement('p')
    company.innerText = 'Company: ' + data.company
    about.appendChild(company)

    const website = document.createElement('a')
    const linkTwo = document.createTextNode('Website ' + data.blog)
    website.appendChild(linkTwo)
    website.href = data.blog
    website.target = "_blank"
    about.appendChild(website)

    const bioText = document.createElement('p')
    bioText.innerText = data.bio
    bio.appendChild(bioText)

    const picture = document.createElement('img')
    picture.src = data.avatar_url
    console.log(picture.src)
    bio.appendChild(picture)

})  
    
