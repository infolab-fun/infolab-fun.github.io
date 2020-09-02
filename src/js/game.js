let button11, button12, button13, button14, button21, button22, button23, button24, button31, button32, button33, button34;

let trueIdWayCo = [["button11", "button12", "button13"], ["button21", "button23", "button24" ],
    ["button32","button33", "button34"]];
let trueIdISC = [["button11"], ["button23"], ["button32"]];
let trueIdRecyclingStarter = [["button11", "button12", "button13"], ["button21", "button22", "button23", "button24"],
    ["button32", "button33", "button34"]];
let trueIdManifesto = [["button11"], ["button21"], ["button33"]];
let trueIdRushZone = [["button11", "button12"], ["button22"], ["button31"]];


let allId = [["button11", "button12", "button13", "button14"], ["button21", "button22", "button23", "button24"],
    ["button31", "button32", "button33", "button34"]];
let playerId;

let currentTrueId;

function startGame(gameName) {
    playerId = [];
    document.getElementById('game_header').innerText = currentProject;
    const gameAbout = document.getElementById('game_about');
    if (currentProject === isc) gameAbout.innerHTML = `<span>Нативное Android приложение для химических тестов.</span>`;
    else if (currentProject === recyclingStarter) gameAbout.innerHTML = `<span>Сервис для автоматизации раздельного сбора отходов, состоящий из сайта и мобильных приложений.</span>`;
    else if (currentProject === manifesto) gameAbout.innerHTML = `<span>Приложение для настройки бионических протезов для умных часов.</span>`;
    else if (currentProject === wayco) gameAbout.innerHTML = `<span>Сервис для удалённого заказа кофе, состоящий из веб и мобильных приложений.</span>`;
    else if (currentProject === rushZone) gameAbout.innerHTML = `<span>Мобильная экшн-рпг игра, разрабатываемая на Unity.</span>`;
    setInitialSettings();

    // setting current right answers
    switch (currentProject) {
        case isc:
            currentTrueId = trueIdISC;
            break;
        case wayco:
            currentTrueId = trueIdWayCo;
            break;
        case manifesto:
            currentTrueId = trueIdManifesto;
            button11.textContent = "Tizen";
            button13.textContent = "Linux";
            button23.textContent = "Pascal";
            button24.textContent = "Python";
            button32.textContent = "Atom";
            button33.textContent = "Tizen Studio";
            button34.textContent = "VS Code";
            break;
        case rushZone:
            currentTrueId = trueIdRushZone;
            button14.textContent = "Linux";
            button21.textContent = "Kotlin";
            button32.textContent = "PyCharm";
            button34.textContent = "Eclipse";
            break;
        case recyclingStarter:
            currentTrueId = trueIdRecyclingStarter;
            button14.textContent = "MacOS";
            button22.textContent = "Python"
            break;
    }
}

function onClickButton(buttonId) {
    thisButton = document.getElementById(buttonId);

    if (thisButton.className === "block") {
        thisButton.className = "block correct";
        playerId.push(buttonId);

        console.log(playerId);
    } else if(thisButton.className === "block correct"){
        thisButton.className = "block";

        _.pull(playerId,buttonId);
        console.log(playerId);

    } else {
        thisButton.className = "block";

        _.pull(playerId,buttonId);
        console.log(playerId);
    }

    playerId.forEach(element => console.log(element));
}

function onCheckButton() {
    isSuccessful = false;

    // Массив с неверно выбранными или не поставленными вариантами
    let wrong_answers = _.xor(playerId, currentTrueId.flat(2));
    document.getElementById('title_platform').className = "active";
    document.getElementById('title_language').className = "active";
    document.getElementById('title_env').className = "active";

    if (wrong_answers.length === 0) {
        console.log(wrong_answers);
        console.log("Все заголовки горят");  //Подсвечиваются все заголовки
        console.log("SUCCESSFUL"); //Тут кнопка взломать перевдит на страницу с описанием
        isSuccessful = true;
        switch (currentProject) {
            case isc:
                iscEnable = true;
                break;
            case manifesto:
                manifestoEnable = true;
                break;
            case recyclingStarter:
                restarterEnable = true;
                break;
            case rushZone:
                rushzoneEnable = true;
                break;
            case wayco:
                waycoEnable = true;
                break;
        }
        saveToStorage();
        showProjectEnable();
        } else {
        console.log("BAD");

        wrong_answers.forEach(el => {
            idx = onCheckLine(el);
            setStyleLine(idx);

            thisBut = document.getElementById(el);
            thisBut.className = "block incorrect";

            if (currentTrueId.flat(2).find(i => el === i)) {
                console.log("НЕ ХВАТАЕТ " + el);
                no_but = document.getElementById(el);
                no_but.className = "block"
            }
        });
        console.log(wrong_answers);
    }
    return isSuccessful;

}

function setStyleLine(idx) {
    if (idx === 0) {
        document.getElementById('title_platform').className = ""
        console.log("Первый ряд потух");
    }
    else if (idx === 1) {
        document.getElementById('title_language').className = ""
        console.log("Потух второй ряд");
    }
    else if (idx === 2) {
        document.getElementById('title_env').className = ""
        console.log("Потух третий ряд");
    } else {
        console.log("Все горят");
    }
}

// Функция определяет в каком ряду находится элемент
function onCheckLine(key){
    console.log(key, allId);
    const a = allId.findIndex(arrEl => {
        console.log('arrEl', arrEl, key)
        return arrEl.find(i => i === key)
    });
    console.log(a);
    return a
}

function setInitialSettings() {
    button11 = document.getElementById("button11");
    button12 = document.getElementById("button12");
    button13 = document.getElementById("button13");
    button14 = document.getElementById("button14");
    button21 = document.getElementById("button21");
    button22 = document.getElementById("button22");
    button23 = document.getElementById("button23");
    button24 = document.getElementById("button24");
    button31 = document.getElementById("button31");
    button32 = document.getElementById("button32");
    button33 = document.getElementById("button33");
    button34 = document.getElementById("button34");
    button11.textContent = "Android";
    button12.textContent = "iOS";
    button13.textContent = "Web";
    button14.textContent = "Windows";
    button21.textContent = "Java Script";
    button22.textContent = "C#";
    button23.textContent = "Java";
    button24.textContent = "Swift";
    button31.textContent = "Unity";
    button32.textContent = "Android Studio";
    button33.textContent = "XCode";
    button34.textContent = "Web Storm";
    button11.className = "block";
    button12.className = "block";
    button13.className = "block";
    button14.className = "block";
    button21.className = "block";
    button22.className = "block";
    button23.className = "block";
    button24.className = "block";
    button31.className = "block";
    button32.className = "block";
    button33.className = "block";
    button34.className = "block";

}
