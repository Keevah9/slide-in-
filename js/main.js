
function debounce(func, wait = 20, immediate = true){
    var timeout;
    return function(){
        var context = this, args = arguments
        var later = function(){
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if(callNow) func.apply(context, args)
    }
}



const sliders = document.querySelectorAll('.slide-in')


function handleScroll(e){
    console.log(e)
    sliders.forEach(slide => {
        // half way thru the img
        const scrollAt = (window.scrollY + window.innerHeight) - slide.height / 2

        // bottom of the img
        const imgBottom = slide.offsetTop + slide.height

        const halfShown = scrollAt > slide.offsetTop
        const notPassed = window.scrollY < imgBottom
            if(halfShown && notPassed){
                slide.classList.add('active')
            }else{
                slide.classList.remove('active')
            }
        })
}

window.addEventListener('scroll', debounce(handleScroll))

const menu = document.querySelector('.menu')
const images = document.querySelectorAll('.images')
const closeBtn = document.querySelector('.close')
const navBar = document.querySelector('.navLinks')
const navCon = document.querySelector('.navCon')

function navToggle(e){
    console.log(this)
    const current = e.target
    if(current == menu){
        navBar.style.display = 'block'
        navCon.classList.add('addHeight')
        menu.style.display = 'none'
        closeBtn.style.display = "block";
    }else{
        navBar.style.display = 'none'
        navCon.classList.remove('addHeight')
        closeBtn.style.display = 'none'
        menu.style.display = "block";
    }
}


images.forEach(image => image.addEventListener('click', navToggle))