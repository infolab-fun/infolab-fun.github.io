/** Текущий экран приложения. */
let currentPage = 'profile';

/**
 * Функция открытия нового экрана приложения.
 * @param page {string} название экрана
 */
function openPage(page) {
    currentPage = page;
    render();
}
