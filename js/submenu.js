const menu = document.querySelectorAll('.emap-info-list')
if(menu){
    Array.from(menu).map(item => {
        item.querySelector('.emap-info-list-title').onclick = () => {
            item.classList.toggle('active')

        }
        Array.from(item.querySelectorAll('li')).map(i => {
            
            i.onclick = () => {
                Array.from(item.querySelectorAll('li')).map(li => {
                    li.classList.remove('active')
                })
                i.classList.add('active')
            }
        })
    })
}