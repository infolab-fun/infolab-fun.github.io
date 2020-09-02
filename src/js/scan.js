const html5QrCode = new Html5Qrcode("reader", true);

function startScan() {
    let cameras = Html5Qrcode.getCameras();
    cameras.then(devices => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        const cameraNum = devices.length - 1;
        console.log("Camera Number: " + cameraNum)
        if (devices && devices.length) {
            cameraId = devices[cameraNum].id;
            return scanning(cameraId);
        }
    }).catch(err => {
        console.log("GetCameras. Error: " + err);
    });
}

function scanning(cameraId) {
    html5QrCode.start(
        cameraId,
        {
            fps: 10, // Optional frame per seconds for qr code scanning
            qrbox: 450
        },
        qrCodeMessage => {
            console.log(qrCodeMessage);
            let projectName = '';
            if (qrCodeMessage === 'https://vk.com/infolab_club?project=isc' && !iscEnable) projectName = isc;
            if (qrCodeMessage === 'https://vk.com/infolab_club?project=restarter' && !restarterEnable) projectName = recyclingStarter;
            if (qrCodeMessage === 'https://vk.com/infolab_club?project=manifesto' && !manifestoEnable) projectName = manifesto;
            if (qrCodeMessage === 'https://vk.com/infolab_club?project=wayco' && !waycoEnable) projectName = wayco;
            if (qrCodeMessage === 'https://vk.com/infolab_club?project=rushzone' && !rushzoneEnable) projectName = rushZone;
            if (projectName !== '') {
                currentProject = projectName;
                stopScan();
                startGame();
                openPage('game');
            }
            return qrCodeMessage;
        },
        errorMessage => {
            // console.log("Error: " + errorMessage)
        })
        .catch(err => {
            console.log("Start failed. Error: " + err);
        });
}

function stopScan() {
    html5QrCode.stop().then(ignore => {
        // QR Code scanning is stopped.
    }).catch(err => {
        // Stop failed, handle it.
    });
}