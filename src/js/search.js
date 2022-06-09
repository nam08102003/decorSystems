const itemsDropdown1 = document.querySelectorAll('.content .toolbar .type .item-child')
const itemsDropdown2 = document.querySelectorAll('.content .toolbar .application .item-child')
const itemsDropdown3 = document.querySelectorAll('.content .toolbar .product .item-child')
const itemsDropdown4 = document.querySelectorAll('.content .toolbar .location .item-child')
const openMenu1 = document.querySelector('.content .toolbar .type  .open-menu span')
const openMenu2 = document.querySelector('.content .toolbar .application  .open-menu span')
const openMenu3 = document.querySelector('.content .toolbar .product  .open-menu span')
const openMenu4 = document.querySelector('.content .toolbar .location .open-menu span')
const loadMoreBtn = document.querySelector('.content .content-load')










let projectsSpec = fetch('https://62675c5e78638336421e6d69.mockapi.io/projects')
    .then (respone => respone.json())


Promise.all([projectsSpec])
    .then(([projects]) => {
        itemsDropdown1.forEach((item) => {
            item.addEventListener('click', function() {
                let value = item.innerHTML
                let results
                if(value === 'ALL') {
                    openMenu1.innerHTML = 'ALL PROJECTS'
                    results = projects
                    loadMoreBtn.style.display = 'block'
                } else {
                    openMenu1.innerHTML = value
                    results = projects.filter((project) => {
                        return project.type.toLowerCase().includes(value.toLowerCase())
                    })
                    loadMoreBtn.style.display = 'none'
                }
                renderResults(results)
                
            })
        })

        itemsDropdown2.forEach((item) => {
            item.addEventListener('click', function(e) {
                let value = item.innerHTML
                let results
                if(value === 'ALL') {
                    openMenu2.innerHTML = 'APPLICATION'
                    results = projects
                    loadMoreBtn.style.display = 'block'
                } else {
                    openMenu2.innerHTML = value
                    results = projects.filter((project) => {
                        return project.application.toLowerCase().includes(value.toLowerCase())
                    })
                    loadMoreBtn.style.display = 'none'
                }
                renderResults(results)
                
            })
        })

        itemsDropdown3.forEach((item) => {
            item.addEventListener('click', function(e) {
                let value = item.innerHTML
                let results
                if(value === 'ALL') {
                    openMenu3.innerHTML = 'PRODUCT'
                    results = projects
                    loadMoreBtn.style.display = 'block'
                } else {
                    openMenu3.innerHTML = value
                    results = projects.filter((project) => {
                        return project.product.toLowerCase().includes(value.toLowerCase())
                    })
                    loadMoreBtn.style.display = 'none'
                }
                renderResults(results)
                
            })
        })

        itemsDropdown4.forEach((item) => {
            item.addEventListener('click', function(e) {
                let value = item.innerHTML
                let results
                if(value === 'ALL') {
                    openMenu4.innerHTML = 'LOCATION'
                    results = projects
                    loadMoreBtn.style.display = 'block'
                } else {
                    openMenu4.innerHTML = value
                    results = projects.filter((project) => {
                        return project.location.toLowerCase().includes(value.toLowerCase())
                    })
                    loadMoreBtn.style.display = 'none'
                }
                renderResults(results)
                
            })
        })
        
    })



function renderResults(results) {
    let displayValue = results.map((result, index) => {
        return `
            <a href="" class="item-project ${(index + 1 == 1 || index % 6 == 0 || (index + 1) % 6 == 0) ? 'item-large' : 'item-small'}">
                <div class="imagecontainer">
                    <img src="${result.image}" alt="">
                </div>
                <div class="titlecontainer">
                    <div class="titlefieldset">
                        <span>result</span>
                        <span>${result.name}</span>
                    </div>
                </div>
                <div class="metacontainer">
                    <span>${result.type}</span>
                    <span>${result.product}</span>
                    <span>${result.rate}</span>
                </div>
                <div class="verticalline"></div>
            </a>
            ${(index + 1 ) % 3 == 0 ? '<div class="bottom-line"><div class="line"></div></div>' : ''}
        `
    })
    showProjects.innerHTML = displayValue.join('')
}