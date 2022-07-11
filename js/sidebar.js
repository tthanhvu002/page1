const menuSidebar = document.querySelectorAll('.sidebar .menu li')
Array.from(menuSidebar).map(item =>{
    item.onclick = () => {
        Array.from(menuSidebar).map(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
    }
})