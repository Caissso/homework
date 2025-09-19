const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

const closeModal = () => {
    modal.classList.remove ('modal--open')
}

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', Event => {
    const target = Event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn') ) {
        closeModal ()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal ()
    }
})