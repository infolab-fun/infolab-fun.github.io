let trueId = [["button11", "button12", "button13"], ["button21", "button23", "button24" ],
    ["button32","button34"]];
let allId = [["button11", "button12", "button13", "button14"], ["button21", "button22", "button23", "button24"],
    ["button31", "button32", "button33", "button34"]];
let playerId = [];

function startGame(gameName) {
    document.getElementById('game_header').innerText = currentProject;
    const gameAbout = document.getElementById('game_about');
    if (currentProject === isc) gameAbout.innerHTML = `<span>Нативное Android приложение для химических тестов.</span>`;
    else if (currentProject === recyclingStarter) gameAbout.innerHTML = `<span>Сервис для автоматизации раздельного сбора отходов, состоящий из сайта и мобильных приложений.</span>`;
    else if (currentProject === manifesto) gameAbout.innerHTML = `<span>Приложение для настройки бионических протезов для умных часов.</span>`;
    else if (currentProject === wayco) gameAbout.innerHTML = `<span>Сервис для удалённого заказа кофе, состоящий из веб и мобильных приложений.</span>`;
    else if (currentProject === rushZone) gameAbout.innerHTML = `<span>Мобильная экшн-рпг игра, разрабатываемая на Unity.</span>`;
    setInitialSettings()
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
    let wrong_answers = _.xor(playerId, trueId.flat(2));

    if (wrong_answers.length === 0) {
        console.log(wrong_answers);
        console.log("Все заголовки горят");  //Подсвечиваются все заголовки
        console.log("SUCCESSFUL"); //Тут кнопка взломать перевдит на страницу с описанием
        isSuccessful = true;

    } else {
        document.getElementById('title_platform').className = "active";
        document.getElementById('title_language').className = "active";
        document.getElementById('title_env').className = "active";
        console.log("BAD");

        wrong_answers.forEach(el => {
            idx = onCheckLine(el);
            setStyleLine(idx);

            thisBut = document.getElementById(el);
            thisBut.className = "block incorrect";

            if (trueId.flat(2).find(i => el === i)) {
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
