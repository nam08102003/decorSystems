let seeAll = document.querySelector('.show-menu .panel1 .see-all span')
let seeEducation = document.querySelector('.show-menu .panel1 .items-child .education span')
let seeCommercial = document.querySelector('.show-menu .panel1 .items-child .commercial span')
let seeHealth = document.querySelector('.show-menu .panel1 .items-child .health span')
let seeRetail = document.querySelector('.show-menu .panel1 .items-child .retail span')
let seeArt = document.querySelector('.show-menu .panel1 .items-child .art span')
const listPanel2 = document.querySelector('.show-menu .panel2 .items-child')
const panel3 = document.querySelector('.show-menu .panel3')
const closePanel2 = document.querySelector('.show-menu .panel2 .close')



let projectsSort = fetch('https://62675c5e78638336421e6d69.mockapi.io/projects')
    .then( respone => respone.json())

Promise.all([projectsSort])
    .then(([projects]) => {
        seeAll.innerHTML = projects.length
        let valueEducation = projects.filter((project) => {
            return project.type.includes('EDUCATION')
        })
        let valueCommercial = projects.filter((project) => {
            return project.type.includes('COMMERCIAL')
        })
        let valueHealth = projects.filter((project) => {
            return project.type.includes('HEALTH AND AGED CARE')
        })
        let valueRetail = projects.filter((project) => {
            return project.type.includes('RETAIL AND HOSPITALITY')
        })
        let valueArt = projects.filter((project) => {
            return project.type.includes('ARTS AND COMMUNITY')
        })

        seeEducation.parentElement.parentElement.addEventListener('mouseover', function () {
            renderLists(valueEducation)
        })

        seeCommercial.parentElement.parentElement.addEventListener('mouseover', function () {
            renderLists(valueCommercial)
        })

        seeHealth.parentElement.parentElement.addEventListener('mouseover', function () {
            renderLists(valueHealth)
        })

        seeRetail.parentElement.parentElement.addEventListener('mouseover', function () {
            renderLists(valueRetail)
        })

        seeArt.parentElement.parentElement.addEventListener('mouseover', function () {
            renderLists(valueArt)
        })


        seeEducation.innerHTML = setValue(valueEducation.length)
        seeCommercial.innerHTML = setValue(valueCommercial.length)
        seeHealth.innerHTML = setValue(valueHealth.length)
        seeRetail.innerHTML = setValue(valueRetail.length)
        seeArt.innerHTML = setValue(valueArt.length)


        
    })

function setValue(value) {
    if(value < 10) {
        return '0' + value
    } else {
        return value
    }
}




function renderLists(lists) {
    let data
    const htmls = lists.map((item, index) => {
        data = item
        return `
            <div class="item" onmouseover=renderPanel3()>
                <div class="name">
                    <span>${item.name}</span>
                    <div class="view-details">
                        <button class="submit" type="submit">
                            <svg class="arrowSvg" height="8px" width="18px">
                                <polyline points="0,4 18,4 13,0 18,4 13,8 18,4 0,4" ></polyline>
                                <line vector-effect="non-scaling-stroke" x1="0" y1="4" x2="16.1" y2="4" stroke="#cca99f"></line>
                            </svg>
                            <svg class="arrowSvg" height="8px" width="18px">
                                <polyline points="0,4 18,4 13,0 18,4 13,8 18,4 0,4" ></polyline>
                                <line vector-effect="non-scaling-stroke" x1="0" y1="4" x2="16.1" y2="4" stroke="#cca99f"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="info">
                    <div class="type">
                        <h4>Products</h4>
                        <span>${item.product}</span>
                    </div>
                    <div class="location">
                        <h4>Location</h4>
                        <span>${item.location}</span>
                    </div>
                </div>  
            </div>
        `

    })

listPanel2.innerHTML = htmls.join('')

}

function renderPanel3() {
    panel3.classList.add('show')
    closePanel2.style.opacity = 0;
    closePanel2.style.transition = 'all 0.4s ease-in-out'
    closePanel2.style.pointerEvents = 'none'
}







