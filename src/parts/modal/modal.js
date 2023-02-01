export default function modal() {
    const btn = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const btnClose = document.querySelector('[data-close]');

    
    btn.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
        })
    })

    btnClose.addEventListener('click', () => {
            modal.style.display = 'none';
    })


    modal.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('modal')) {
            modal.style.display = 'none';
        }
    })
        
}
