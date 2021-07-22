const root = document.getElementById('root')

fetch('https://api.github.com/users/andreavaughan')
.then(response => response.json())
.then(data => {
    const infoCard = document.createElement('div')
    infoCard.classList.add('info-card')
    root.appendChild(infoCard)
    
    const myName = document.createElement('h1')
    myName.innerText = data.name
    infoCard.appendChild(myName)

    // const about = document.getElementById('about')
    // infoCard.classList.add('info-card')

    const nameParagraph = document.createElement('p')
    nameParagraph.innerText = 'Name ' + data.name
    infoCard.appendChild(nameParagraph)

    const gitHubLink = document.createElement('a')
    const linkOne = document.createTextNode('GitHub URL ' + data.html_url)
    gitHubLink.appendChild(linkOne)
    gitHubLink.href = data.html_url
    gitHubLink.target = "_blank"
    infoCard.appendChild(gitHubLink)

    const company = document.createElement('p')
    company.innerText = 'Company: ' + data.company
    infoCard.appendChild(company)

    const website = document.createElement('a')
    const linkTwo = document.createTextNode('Website ' + data.blog)
    website.appendChild(linkTwo)
    website.href = data.blog
    website.target = "_blank"
    infoCard.appendChild(website)

    // const bio = document.getElementById('bio')
    // bio.classList.add('info-card')

    const bioText = document.createElement('p')
    bioText.innerText = data.bio
    infoCard.appendChild(bioText)

    const picture = document.createElement('img')
    picture.src = data.avatar_url
    console.log(picture.src)
    infoCard.appendChild(picture)

    fetch(data.repos_url) //this is called a nested api, it's an api request within an api request
        .then(res => res.json())
        .then(repos => {
            for (repo of repos){
                let repoName = document.createElement('h3')
                repoName.innerText = repo.name
                infoCard.appendChild(repoName)
            }
        })
})  
    
