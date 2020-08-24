/**
 * Функция определения поведения UI элементов.
 */
function setOnClickListeners() {
    // Кнопка "Открыть камеру"
    document.getElementById('button_open_camera').addEventListener('click', () => {
        openPage('camera');
    });
    // Кнопка "Начать играть"
    document.getElementById('button_open_game').addEventListener('click', () => {
        openPage('game');
    });
    // Кнопка "Взломать" (проект)
    document.getElementById('button_hack').addEventListener('click', () => {
        openPage('project');
    });
    // Кнопка "Просмотреть проект"
    document.getElementById('button_open_project').addEventListener('click', () => {
        openPage('project');
    });
    // Кнопка "Закрыть камеру"
    document.getElementById('button_close_camera').addEventListener('click', () => {
        openPage('profile');
    });
    // Кнопка "Завершить игру"
    document.getElementById('button_close_game').addEventListener('click', () => {
        openPage('camera');
    });
    // Кнопка "Закрыть проект"
    document.getElementById('button_close_project').addEventListener('click', () => {
        openPage('profile');
    });
}
