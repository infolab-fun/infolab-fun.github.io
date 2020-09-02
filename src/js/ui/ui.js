/**
 * Функция определения поведения UI элементов.
 */
function setOnClickListeners() {
    // Кнопка "Открыть камеру"
    document.getElementById('button_open_camera').addEventListener('click', () => {
        openPage('camera');
        startScan();
    });
    // Кнопка "Взломать" (проект)
    document.getElementById('button_hack').addEventListener('click', () => {
        isSuccessful = onCheckButton();
        if (isSuccessful) {
            openPage('project');
            showProjectDescription(wayco);
        }
    });
    // Кнопка "Закрыть камеру"
    document.getElementById('button_close_camera').addEventListener('click', () => {
        stopScan();
        openPage('profile');
    });
    // Кнопка "Завершить игру"
    document.getElementById('button_close_game').addEventListener('click', () => {
        openPage('camera');
        startScan();
    });
    // Кнопка "Закрыть проект"
    document.getElementById('button_close_project').addEventListener('click', () => {
        openPage('profile');
        showProjectEnable();
    });

    document.getElementById('button_open_manifesto').addEventListener('click', () => {
        if (manifestoEnable) {
            openPage('project');
            showProjectDescription(manifesto);
        }
    });

    document.getElementById('button_open_wayco').addEventListener('click', () => {
        if (waycoEnable) {
            openPage('project');
            showProjectDescription(wayco);
        }
    });

    document.getElementById('button_open_recycling_starter').addEventListener('click', () => {
        if (restarterEnable) {
            openPage('project');
            showProjectDescription(recyclingStarter);
        }
    });

    document.getElementById('button_open_isc').addEventListener('click', () => {
        if (iscEnable) {
            openPage('project');
            showProjectDescription(isc);
        }
    });

    document.getElementById('button_open_rush_zone').addEventListener('click', () => {
        if (rushzoneEnable) {
            openPage('project');
            showProjectDescription(rushZone);
        }
    });
}

function showProjectEnable() {
    const buttonIscProject = document.getElementById('button_open_isc');
    if (iscEnable) {
        buttonIscProject.classList.remove('item_disable')
    } else buttonIscProject.classList.add('item_disable');
    const buttonRestarterProject = document.getElementById('button_open_recycling_starter');
    if (restarterEnable) {
        buttonRestarterProject.classList.remove('item_disable')
    } else buttonRestarterProject.classList.add('item_disable');
    const buttonManifestoProject = document.getElementById('button_open_manifesto');
    if (manifestoEnable) {
        buttonManifestoProject.classList.remove('item_disable')
    } else buttonManifestoProject.classList.add('item_disable');
    const buttonWayCoProject = document.getElementById('button_open_wayco');
    if (waycoEnable) {
        buttonWayCoProject.classList.remove('item_disable')
    } else buttonWayCoProject.classList.add('item_disable');
    const buttonRushZoneProject = document.getElementById('button_open_rush_zone');
    if (rushzoneEnable) {
        buttonRushZoneProject.classList.remove('item_disable')
    } else buttonRushZoneProject.classList.add('item_disable');
}
