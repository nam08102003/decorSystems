$(document).ready(function() {



const menuItems = document.querySelectorAll('.menu-item')
const menuSorts = document.querySelectorAll('.show-menu .taskbar .menu ul li')
const header = document.querySelector('.header')
const verticalLines = document.querySelectorAll('.verticalline')
const bottomLines = document.querySelectorAll('.projects .bottom-line')
const toolbarItems = document.querySelectorAll('.section-toolbar .toolbar .item .open-menu')
const lineWrapper1 = document.querySelector('.content .line-wrapper1')
const lineWrapper2 = document.querySelector('.content .line-wrapper2')
const noHover = document.querySelectorAll('.footer .footer-right .no-hover')
const sortMenu = document.querySelector('.header .sort-menu')
const overlay = document.querySelector('.overlay')
const showMenu = document.querySelector('.show-menu')
const panel2 = document.querySelector('.show-menu .panel2')
const itemPanel1s = document.querySelectorAll('.show-menu .panel1 ul li')
const close = document.querySelectorAll('.close')
const closePanel1 = document.querySelector('.show-menu .panel1 .close')
const closePanel2 = document.querySelector('.show-menu .panel2 .close')
const btnLoadMore = document.querySelector('.content .show .content-load')
const cloneLoadMore = document.querySelector('.content .show .content-load .clone-content')
const btnCloneLoadMore = document.querySelector('.content .show .content-load .clone-load')
const submitFooterBtn = document.querySelector('.footer .footer-left .submit')
const submitFooterBtn1 = document.querySelector('.footer .footer-left .submit svg:first-child')
const submitFooterBtn2 = document.querySelector('.footer .footer-left .submit svg:last-child')
const callBtn = document.querySelector('.show-menu .taskbar .call')
const submitShowBtn1 = document.querySelector('.show-menu .taskbar .submit svg:first-child')
const submitShowBtn2 = document.querySelector('.show-menu .taskbar .submit svg:last-child')
const viewProjectsBtn = document.querySelector('.show-menu .panel3 .view-project')
const viewProjectsBtn1 = document.querySelector('.show-menu .panel3 .view-project svg:first-child')
const viewProjectsBtn2 = document.querySelector('.show-menu .panel3 .view-project svg:last-child')
const viewDetailsBtn = document.querySelectorAll('.show-menu .panel2 .view-details')
const viewDetailsBtn1 = document.querySelectorAll('.show-menu .panel2 .view-details svg:first-child')
const viewDetailsBtn2 = document.querySelectorAll('.show-menu .panel2 .view-details svg:last-child')








viewDetailsBtn.forEach((item, index) => {
    item.addEventListener('mouseover', function () {
        arrowSvg(viewDetailsBtn1[index],viewDetailsBtn2[index])
    })

    item.addEventListener('mouseout', function () {
        arrowSvgNone(viewDetailsBtn1[index],viewDetailsBtn2[index])
    })
})


viewProjectsBtn.addEventListener('mouseover', function () {
    arrowSvg(viewProjectsBtn1,viewProjectsBtn2)
})

viewProjectsBtn.addEventListener('mouseout', function () {
    arrowSvgNone(viewProjectsBtn1,viewProjectsBtn2)
})

callBtn.addEventListener('mouseover', function () {
    arrowSvg(submitShowBtn1,submitShowBtn2)
})

callBtn.addEventListener('mouseout', function () {
    arrowSvgNone(submitShowBtn1,submitShowBtn2)
})


submitFooterBtn.addEventListener('mouseover', function () {
    arrowSvg(submitFooterBtn1,submitFooterBtn2)
})

submitFooterBtn.addEventListener('mouseout', function () {
    arrowSvgNone(submitFooterBtn1,submitFooterBtn2)
})






    menuItems.forEach((menuItem) => {
        menuItem.onmouseover = function () {
            this.classList.remove('event-load')
        }
    })

    noHover.forEach((item) => {
        item.addEventListener('mouseover', function () {
            this.classList.remove('no-hover')
        })
    })


    verticalLines.forEach((item) => {
        scaleLine(item)
    })

    bottomLines.forEach((item) => {
        console.log(item)
        scaleLine(item)
    })
    

    cloneLoadMore.style.transform = 'translateY(110%)'
    btnCloneLoadMore.style.transform = 'translateY(110%)'


window.addEventListener('scroll', (e) => {
    if(window.scrollY > 20) {
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }


    
    verticalLines.forEach((item) => {
        scaleLine(item)
    })

    bottomLines.forEach((item) => {
        scaleLine(item)
    })


    scaleLine(lineWrapper1)
    scaleLine(lineWrapper2)
    

})

toolbarItems.forEach((item) => {
    item.addEventListener('click', function () {
        this.parentElement.classList.toggle('show-dropdown')
        this.classList.toggle('show-border')
    })
})


sortMenu.addEventListener('click', function () {
    overlay.style.display = 'block'
    showMenu.classList.add('appear')
    closePanel1.style.opacity = 1
    closePanel1.style.pointerEvents = 'all'
    closePanel2.style.opacity = 1
    closePanel2.style.pointerEvents = 'all'
})

itemPanel1s.forEach((item) => {
    item.addEventListener('mouseover', function () {
        panel2.classList.add('show')
        closePanel1.style.opacity = 0;
        closePanel1.style.transition = 'all 0.4s ease-in-out'
        closePanel1.style.pointerEvents = 'none'
    })
})


close.forEach((item) => {
    item.addEventListener('click', function () {
        overlay.style.display = 'none'
        showMenu.classList.remove('appear')
        panel2.classList.remove('show')
        panel3.classList.remove('show')
    })
})


btnLoadMore.addEventListener('mouseover', function () {
    cloneLoadMore.style.transform = 'translateY(0)'
    btnCloneLoadMore.style.transform = 'translateY(0)'
})

btnLoadMore.addEventListener('mouseout', function () {
    cloneLoadMore.style.transform = 'translateY(110%)'
    btnCloneLoadMore.style.transform = 'translateY(110%)'
})





function scaleLine(item) {
    var position = item.getBoundingClientRect()
    if(position.top >= 30 && position.bottom <= window.innerHeight) {
        item.classList.add('scale-line')
    }
}


function arrowSvg(item1, item2) {
    item1.style.transform = 'translateX(200%)'
    item2.style.transform = 'translateX(220%)'
}

function arrowSvgNone(item1, item2) {
    item1.style.transform = 'translateX(0)'
    item2.style.transform = 'translateX(0)'
}





})