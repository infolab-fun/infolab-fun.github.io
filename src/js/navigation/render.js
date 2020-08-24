/**
 * Функция отрисовки открытого экрана.
 */
function render() {
    let pages = document.querySelectorAll(`.page`);
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id === currentPage) {
            pages[i].classList.remove(`hidden`);
        } else {
            pages[i].classList.add(`hidden`);
        }
    }
}
