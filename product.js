const container = document.querySelector(".info")
async function fetchCall(){
    const response = await fetch('http://localhost/flower-power/wp-json/wc/store/products')
    const data = await response.json()
    return data
}

function renderPage(data) {
const dataArray = data
    dataArray.forEach(product => {
        container.innerHTML +=
         ` <div>
        <img 
        src="${product.images[0].src}"
        alt="${product.name}" 
        />
    </div>

    <div class="gameDescription">
        <h1><u>${product.name}</u></h1>
        <h2>Description</h2>
        <p>${product.description}</p>
    </div>
`
    })

}

async function render(){
    const data = await fetchCall()
    renderPage(data)
}
render() 

