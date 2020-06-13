window.onload = updateNav

window.addEventListener('resize', updateNav)

function updateNav() {
    [activeNav] = document.getElementsByClassName('active')

    if(document.body.clientWidth > '800') {
        activeNav.style.position = 'relative'
        activeNav.style.top = '18px'
        activeNav.style.paddingBottom = '25px'
        activeNav.style.borderBottom = 'none'
        activeNav.style.zIndex = '1'
    } else {
        activeNav.removeAttribute('style')
    }
}

function retornar() {
    return window.history.back();
}