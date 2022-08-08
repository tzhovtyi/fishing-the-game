
    //переменные локализации
    let scoreWord;
    let youWord;
    let fish1;
    let fish2;
    let fish3;
    let fish4;
    let fish5;
    let fish6;
    let fishWord;

    const localisationMap = {
        'rules': {
            "ru": "Правила",
            "en": "Rules"
        },
        'rules-descripton': {
            "ru": "тащемта ничего сложного нет. <br> Кликаешь мышкой - рыба туда плывет. <br> Управление максимально интуитивное.",
            "en": "So, there is nothing much here. <br> You click - the fish swims. <br> You'll figure out the rest."
        },
        'close': {
            "ru": "Закрыть",
            "en": "Close"
        },
        'select-dif': {
            "ru": "Выберите уровень сложности",
            "en": "Select difficulty"
        },
        'easy': {
            "ru": "Несложно",
            "en": "Easy"
        },
        'normal': {
            "ru": "Чуть-чуть сложно",
            "en": "Normal"
        },
        'hard': {
            "ru": "Сложно",
            "en": "Hard"
        },
        'lost-query': {
            "ru": "Жаль, но вы проиграли. <br> Хотите попробовать еще?",
            "en": "You have lost. <br> Wanna play again?"
        },
        'restart': {
            "ru": "Да, хочу",
            "en": "Restart"
        },
        'save-score': {
            "ru": "Сохранить очки",
            "en": "Save score"
        },
        'rate': {
            "ru": "Оценить игру",
            "en": "Rate the game"
        },
        'scoreboard': {
            "ru": "Доска почета",
            "en": "Scoreboard"
        },
        'enter-name': {
            "ru": "Представьтесь, чтобы сохранить счет",
            "en": "Enter your name to save the score"
        },
        'save': {
            "ru": "Сохранить",
            "en": "Save"
        },
        'scoreWord': {
            'ru': 'Счет: ',
            'en': 'Score: '
        },
        'youWord': {
            'ru': 'Вы: ',
            'en': 'You are '
        },
        'fish1': {
            'ru': 'маленькая рыба',
            'en': 'a small fish'
        },
        'fish2': {
            'ru': 'окунь',
            'en': 'a snapper'
        },
        'fish3': {
            'ru': 'cumбала',
            'en': 'a flounder'
        },
        'fish4': {
            'ru': 'летучая рыба',
            'en': 'a flying fish'
        },
        'fish5': {
            'ru': 'радужная форель',
            'en': 'a rainbow trout'
        },
        'fish6': {
            'ru': 'лгбт рыба',
            'en': 'a pride fish'
        }
    }

    let dictionary = {};
    function setLanguage(lang) {
        const keys = Object.keys(localisationMap);
        keys.forEach(key => {
            dictionary[key] = localisationMap[key][lang];
        })
        document.querySelectorAll("[loc]").forEach(element => {
            element.innerHTML = dictionary[element.getAttribute('loc')];
        })

        scoreWord = dictionary['scoreWord'];
        youWord = dictionary['youWord'];
        fish1 = dictionary['fish1'];
        fish2 = dictionary['fish2'];;
        fish3 = dictionary['fish3'];
        fish4 = dictionary['fish4'];
        fish5 = dictionary['fish5'];
        fish6 = dictionary['fish6'];

        fishWord = fish1;

        document.querySelector('#fish-choice-1').innerHTML += fish1;
        document.querySelector('#fish-choice-2').innerHTML += fish2;
        document.querySelector('#fish-choice-3').innerHTML += fish3;
        document.querySelector('#fish-choice-4').innerHTML += fish4;
        document.querySelector('#fish-choice-5').innerHTML += fish5;
        document.querySelector('#fish-choice-6').innerHTML += fish6;

        document.getElementById('modal1').style.display = 'none';
        document.getElementById('modal2').style.opacity = '1';
        if (lang === 'ru') document.querySelector('#savescore-request-btn').style.fontSize = '0.6em';
    }
