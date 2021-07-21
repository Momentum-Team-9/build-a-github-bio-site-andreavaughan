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
    const link = document.createTextNode(data.html_url)
    const gitLinkLine = document.createElement('p')
    gitHubLink.appendChild(link)
    gitHubLink.href = data.html_url
    gitHubLink.target = "_blank"
    console.log(gitHubLink)

    gitLinkLine.innerText = 'GitHub URL ' + gitHubLink

    about.appendChild(gitLinkLine)

    const company = document.createElement('p')

})
