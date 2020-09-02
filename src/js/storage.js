function loadFromStorage() {
    if (localStorage.getItem(isc) != null) iscEnable = localStorage.getItem(isc) === 'true';
    if (localStorage.getItem(recyclingStarter) != null) restarterEnable = localStorage.getItem(recyclingStarter) === 'true';
    if (localStorage.getItem(manifesto) != null) manifestoEnable = localStorage.getItem(manifesto) === 'true';
    if (localStorage.getItem(wayco) != null) waycoEnable = localStorage.getItem(wayco) === 'true';
    if (localStorage.getItem(rushZone) != null) rushzoneEnable = localStorage.getItem(rushZone) === 'true';
}

function saveToStorage() {
    localStorage.setItem(isc, iscEnable);
    localStorage.setItem(recyclingStarter, restarterEnable);
    localStorage.setItem(manifesto, manifestoEnable);
    localStorage.setItem(wayco, waycoEnable);
    localStorage.setItem(rushZone, rushzoneEnable);
}
