export default function tabs() {

    const tabheaderItems = document.querySelectorAll('.tabheader__item');

    tabheaderItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            activeElement('.tabcontent', 'tabcontent--active', i);
            activeElement('.tabheader__item', 'tabheader__item_active', i);
        })
    })


    function activeElement(className, classActive, i = 0) {
        const  tabContent = document.querySelectorAll(className);

        tabContent.forEach(item => {
            item.classList.remove(classActive); 
        }) 

        tabContent[i].classList.add(classActive);
    }
}

