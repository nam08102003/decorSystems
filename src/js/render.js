const showProjects = document.querySelector('.content .show .projects')
 
 
 
 // Lấy api project
let projectsApi = fetch('https://62675c5e78638336421e6d69.mockapi.io/projects')
    .then(respone => respone.json())





// Render project
Promise.all([projectsApi])
.then(([projects]) => {
    const htmls = projects.map((project,index) => {
        return `
            <a href="" class="item-project ${(index + 1 == 1 || index % 6 == 0 || (index + 1) % 6 == 0) ? 'item-large' : 'item-small'}">
                <div class="imagecontainer">
                    <img src="${project.image}" alt="">
                </div>
                <div class="titlecontainer">
                    <div class="titlefieldset">
                        <span>Project</span>
                        <span>${project.name}</span>
                    </div>
                </div>
                <div class="metacontainer">
                    <span>${project.type}</span>
                    <span>${project.product}</span>
                    <span>${project.rate}</span>
                </div>
                <div class="verticalline"></div>
            </a>
            ${(index + 1 ) % 3 == 0 ? '<div class="bottom-line"><div class="line"></div></div>' : ''}
        `
    })
    showProjects.innerHTML = htmls.join('')
    
})