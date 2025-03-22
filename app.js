const body = document.body
const html = document.documentElement
const style = document.createElement("style")
style.innerHTML = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`
document.head.append(style)
function styleBody() {

    html.style.cssText = `
    height: 100%;
    `
    body.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #141414;
    height: 100%;
    `
}

function createCard() {
    const div = document.createElement("div")
    const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]
    div.style.cssText = `
    width: 384px;
    background-color: #1F1F1F;
    border-radius: 12px;
    padding: 40px;
    `
    const avatar = document.createElement("img")

    avatar.style.cssText = `
    border-radius: 50%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    `

    avatar.src = "./image/profil.svg"

    const title = document.createElement("h1")

    title.innerText = "Jessica Randall"
    title.style.cssText = `
    text-align: center;
    color: white;
    margin-bottom: 10px;
    `

    const address = document.createElement("address")
    address.innerText = "London, United Kingdom"

    address.style.cssText = `
    text-align: center;
    color: #C4F82A;
    font-style: normal;
    margin-bottom: 10px;
    `

    const quote = document.createElement("p")
    quote.innerText = `"Front-end developer and avid reader."`

    quote.style.cssText = `
    text-align: center;
    color: rgb(255, 255, 255);
    margin-bottom: 10px;
    `

    const ul = document.createElement("ul")
    ul.style.cssText = `
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    `

    links.forEach((el) => {
        const li = document.createElement("li")
        const link = document.createElement("a")
        link.innerText = el
        link.style.cssText = `
    display: block;
    color: white;
    text-align: center;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    background-color: #333333;
    `
    li.append(link)
    ul.append(li)
    })
    
    

    div.append(avatar, title, address, quote, ul)
    body.append(div)
}



styleBody()
createCard()