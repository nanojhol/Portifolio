let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        header.style.opacity = '70%'
        header.style.background = '#494949'
    }else{
        header.style.background = 'transparent'
        header.style.opacity = '100%'
    }
})