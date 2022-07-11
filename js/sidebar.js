const menu = document.querySelectorAll('.menu li')
Array.from(menu).map(item =>{
    item.onclick = () => {
        Array.from(menu).map(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})