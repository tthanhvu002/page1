Array.from(document.querySelectorAll('.edit-btn')).map((item,index) => {
    item.onclick = () => {
            document.querySelectorAll('.edit-btn')[index].querySelector('.edit-menu').classList.toggle('active')
    }
})