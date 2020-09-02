let currentProject;
var manifesto = 'Manifesto';
var wayco = 'WayCo';
var recyclingStarter = 'Recycling Starter';
var isc = 'ISC';
var rushZone = 'Rush Zone';

let iscEnable = false;
let restarterEnable = false;
let manifestoEnable = false;
let waycoEnable = false;
let rushzoneEnable = false;

let img1 = document.getElementById("project_screen1");
let img2 = document.getElementById("project_screen2");
let img3 = document.getElementById("project_screen3");

function showProjectDescription(project) {
    let img1 = document.getElementById("project_screen1");
    let img2 = document.getElementById("project_screen2");
    let img3 = document.getElementById("project_screen3");
    currentProject = project;
    text = ""
    switch (project) {
        case manifesto:
            text = `<span>
                    <b style="color:#1ADDA5;">Описание:</b><br>
                        Приложение для умных часов SAMSUNG для настройки бионических протезов, производимых компанией Моторика. С помощью приложения пользователь может настраивать чувствительность сжатия/разжатия протеза, установить силу хвата, контролировать заряд аккумулятора или блокировать протез.
                        <br>Данный проект подразумевает то, что умные часы встраиваются в сам протез. Взаимодействие часов с протезом осуществляется с помощью Bluetooth.
                        <br>Также в приложении реализован сбор данных о состоянии протеза и пользователя и отправка их на сервер для последующего анализа со стороны компании.
                    <br><br>
                    <b style="color:#1ADDA5;">Технологии:</b><br>
                        Web-приложение (HTML/CSS/JS) под ОС Tizen.
                    <br><br>
                    <b style="color:#1ADDA5;">Присоединяйся к нам, если тебе интересны:</b><br>
                        1. JavaScript разработка
                        <br>2. C++ разработка
                        <br>3. Машинное обучение
                    </span>`;
            img1.src = 'src/img/screenshots/manifest0.jpg';
            img2.src = 'src/img/screenshots/manifest1.jpg';
            img3.src = 'src/img/screenshots/manifest2.jpg';
            break;
        case wayco:
            text = `<span>
                    <b style="color:#1ADDA5;">Описание:</b><br>
                        Стартап по удалённому заказу кофе. Так мы разрабатываем сервис, который позволяет заказать себе кофе в желаемой кофейне к определенному времени. Пользовать избавляет себя от необходимости стоять в очереди или ждать приготовления заказа. Кроме того, уменьшается количество социальных контактов в условиях нестабильной эпидемиологической обстановки.
                        <br>Дополнительно предусмотрена возможность динамического определения времени, к которому необходимо подготовить заказ, с помощью геолокации и получения информации о загруженность дорог.
                        <br>Кроме того, в проекте реализовано не только клиентское приложение, но и приложение для касс в заведениях.
                    <br><br>
                    <b style="color:#1ADDA5;">Технологии:</b><br>
                        1. VK Mini App - HTML5/CSS3/JavaScript
                        <br>2. Android приложение - Kotlin
                        <br>3. iOS приложение - Swift
                    <br><br>
                    <b style="color:#1ADDA5;">Присоединяйся к нам, если тебе интересны:</b><br>
                        1. Frontend разработка (HTML5/CSS3/JS или React.js)
                        <br>2. Android разработка (Kotlin)
                        <br>3. iOS разработка
                        <br>4. Управление проектами
                    </span>`;
            img1.src = 'src/img/screenshots/wayco0.jpg';
            img2.src = 'src/img/screenshots/wayco1.jpg';
            img3.src = 'src/img/screenshots/wayco2.jpg';
            break;
        case recyclingStarter:
            text = `<span>
                    <b style="color:#1ADDA5;">Описание:</b><br>
                        Сервис для автоматизации процесса раздельного сбора отходов (РСО). С помощью которого можно отслеживать заполненность контейнеров для РСО. А также отправлять запрос перерабатывающим компаниям на очистку контейнера. Сервис состоит из вебсайта, а также мобильных приложений под Android и iOS.
                        <br>Проект разрабатывается совместно с экологическим клубом ITMO.GREEN. Кроме того, проект одерживал победу на хакатоне Ecohack и кейс-чемпионате MAKERCASE.
                        <br>Так с помощью Recycling Starter происходит объединение экоактивистов, волонтёров, сотрудников офисов и перерабатывающих компаний. И его эксплуатация уже вводится не только в Университете ИТМО, но и в ТюмГУ (т.е. мы нацелены на то, чтобы подключать к сервису множество организаций).
                    <br><br>
                    <b style="color:#1ADDA5;">Технологии:</b><br>
                        1. Frontend (web-приложение) - React.js
                        <br>2. Backend - Python, Flask
                        <br>3. Android приложение - Java (в дальнейшем Kotlin)
                        <br>4. iOS приложение - Swift
                    <br><br>
                    <b style="color:#1ADDA5;">Присоединяйся к нам, если тебе интересны:</b><br>
                        1. Frontend разработка (HTML5/CSS3/JS или React.js)
                        <br>2. Backend разработка (Python)
                        <br>3. iOS разработка
                    </span>`;
            img1.src = 'src/img/screenshots/restarter0.jpg';
            img2.src = 'src/img/screenshots/restarter1.jpg';
            img3.src = 'src/img/screenshots/restarter2.jpg';
            break;
        case isc:
            text = `<span>
                    <b style="color:#1ADDA5;">Описание:</b><br>
                        Мобильное приложение под ОС Android, разработанное для Центра Инфохимии Университета ИТМО. Оно позволяет подключаться к автономному потенциостату по Bluetooth и управлять им. Так с помощью приложения можно запускать проведение различных электроаналитических экспериментов и отслеживать данные с прибора в реальном времени на интерактивных графиках.
                        <br>Все проведенные тесты сохраняются на устройстве, но в приложении также реализована возможность их выгрузки на сервер Инфохимии, для последующего анализа.
                    <br><br>
                    <b style="color:#1ADDA5;">Технологии:</b><br>
                        Это нативное приложение, которое было написано на Java. Кроме того, в дополнение к нему было написано ещё одно Android приложение, которое симулировало работу потенциостата (для тестирования).
                    <br><br>
                    <b style="color:#1ADDA5;">Присоединяйся к нам, если тебе интересны:</b><br>
                        1. UI/UX дизайн <br>
                        2. Android разработка
                    </span>`;
            img1.src = 'src/img/screenshots/isc0.jpg';
            img2.src = 'src/img/screenshots/isc1.jpg';
            img3.src = 'src/img/screenshots/isc2.jpg';
            break;
        case rushZone:
            text = `<span>
                    <b style="color:#1ADDA5;">Описание:</b><br>
                        Мобильная 3D игра в жанре экшн-рпг с элементами шутера в сеттинге постапокалипсиса. Игрок бегает по линейным уровням, атакуя толпы зомби с помощью ближнего и огнестрельного оружия. Также предусмотрел локальный мультиплеер на двух игроков.
                        <br>Игра разрабатывается при поддержке YouTube канала “Ну и бред” (аудитория 100к). Где наш клуб отвечает за разработку, а канал за продвижение.
                    <br><br>
                    <b style="color:#1ADDA5;">Технологии:</b><br>
                        Игра пишется на Unity (C#).
                    <br><br>
                    <b style="color:#1ADDA5;">Присоединяйся к нам, если тебе интересны:</b><br>
                        1. Геймдизайн
                        <br>2. Управление проектами
                        <br>3. Unity разработка
                        <br>4. Рисовать иллюстрации
                        <br>5. Создавать 3D модели
                        <br>6. Писать сайндтреки
                    </span>`;
            img1.src = 'src/img/screenshots/rush0.jpg';
            img2.src = 'src/img/screenshots/rush1.jpg';
            img3.src = 'src/img/screenshots/rush2.jpg';
            break;
    }
    document.getElementById('project_description_text').innerHTML = text;
    document.getElementById('project_title').textContent = project;
}