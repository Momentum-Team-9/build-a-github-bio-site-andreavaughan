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

    const about = document.createElement('div')
    about.setAttribute('id', 'about')
    about.classList.add('card')
    infoCard.appendChild(about)

    const aboutDiv = document.getElementById('about')
    const aboutLabel = document.createElement('h2')
    aboutLabel.innerText = 'About'
    aboutDiv.appendChild(aboutLabel)

    const nameParagraph = document.createElement('p')
    nameParagraph.innerText = 'Name: ' + data.name
    aboutDiv.appendChild(nameParagraph)

    const gitHubLink = document.createElement('a')
    const linkOne = document.createTextNode('GitHub URL: ' + data.html_url)
    gitHubLink.appendChild(linkOne)
    gitHubLink.href = data.html_url
    gitHubLink.target = "_blank"
    aboutDiv.appendChild(gitHubLink)

    const company = document.createElement('p')
    company.innerText = 'Company: ' + data.company
    aboutDiv.appendChild(company)

    const website = document.createElement('a')
    const linkTwo = document.createTextNode('Website: ' + data.blog)
    website.appendChild(linkTwo)
    website.href = data.blog
    website.target = "_blank"
    aboutDiv.appendChild(website)

    const bio = document.createElement('div')
    bio.setAttribute('id', 'bio')
    bio.classList.add('card')
    infoCard.appendChild(bio)

    const bioDiv = document.getElementById('bio')
    const bioLabel = document.createElement('h2')
    bioLabel.innerText = 'Bio'
    bioDiv.appendChild(bioLabel)

    const bioText = document.createElement('p')
    bioText.innerText = data.bio
    bioDiv.appendChild(bioText)

    const picture = document.createElement('img')
    picture.src = data.avatar_url
    console.log(picture.src)
    bioDiv.appendChild(picture)

    const repos = document.createElement('div')
    repos.setAttribute('id', 'repos')
    repos.classList.add('card')
    infoCard.appendChild(repos)
    
    const repoDiv = document.getElementById('repos')
    const repoLabel = document.createElement('h2')
    repoLabel.innerText = 'Repos'
    repoDiv.appendChild(repoLabel)

    fetch(data.repos_url) 
        .then(res => res.json())
        .then(repos => {
            for (repo of repos){
                let repoName = document.createElement('h3')
                repoName.innerText = repo.name
                repoDiv.appendChild(repoName)

                let repoLink = document.createElement('a')
                const link = document.createTextNode('Repos: ' + repo.url)
                repoLink.appendChild(link)
                repoLink.href = repo.url
                repoLink.target = "_blank"
                repoDiv.appendChild(repoLink)
            }
        })
})  
    
