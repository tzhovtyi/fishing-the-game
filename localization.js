
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

    function english(){
        scoreWord = "Score: ";
        youWord = "You are ";
        fish1 = "a small fish";
        fish2 = "a snapper";
        fish3 = "a flounder";
        fish4 = 'a flying fish';
        fish5 = 'a rainbow trout';
        fish6 = 'a pride fish';

        fishWord = fish1;

        document.getElementById('modal1').style.display = 'none';
        document.getElementById('buttonRules').innerHTML = 'Rules';
        document.getElementById('modal_rules1').innerHTML = "So, there is nothing much here. <br> You click - the fish swims. <br> You'll figure out the rest.";
        document.getElementById('close_rules').innerHTML = 'Close';
        document.getElementById('modal2_middle').innerHTML = 'Select difficulty';
        document.getElementById('buttonEasy').innerHTML = 'Easy';
        document.getElementById('buttonMedium').innerHTML = 'Meidum';
        document.getElementById('buttonHard').innerHTML = 'Hard';
        document.getElementById('restart_question').innerHTML = 'You have lost. <br> Wanna play again?';
        document.getElementById('restart_button').innerHTML = 'Restart';
        document.getElementById('savescore-request-btn').innerHTML = 'Save score';
        document.getElementById('rate-button').innerHTML = 'Rate the game';
        document.getElementById('scoreboard-title').innerHTML = 'Scoreboard';
        document.getElementById('scoreboard-easy-title').innerHTML = 'Easy';
        document.getElementById('scoreboard-normal-title').innerHTML = 'Normal';
        document.getElementById('scoreboard-hard-title').innerHTML = 'Hard';
        document.getElementById('savescore-text').innerHTML = 'Enter your name to save the score';
        document.getElementById('savescore-final-btn').innerHTML = 'Save score';
        

        document.getElementById('modal2').style.opacity = '1';
    };

    function russian(){
        scoreWord = "очки: ";
        youWord = "вы: ";
        fish1 = "маленькая рыба";
        fish2 = "окунь";
        fish3 = "cumбала";
        fish4 = 'летучая рыба';
        fish5 = 'радужная форель';
        fish6 = 'лгбт рыба';
    
        fishWord = fish1;

        document.getElementById('modal1').style.display = 'none';
        document.getElementById('buttonRules').innerHTML = 'Правила';
        document.getElementById('modal_rules1').innerHTML = "тащемта ничего сложного нет. <br> Кликаешь мышкой - рыба туда плывет. <br> Управление максимально интуитивное."
        document.getElementById('close_rules').innerHTML = 'Закрыть';
        document.getElementById('modal2_middle').innerHTML = 'Выберите уровень сложности';
        document.getElementById('buttonEasy').innerHTML = 'Несложно';
        document.getElementById('buttonMedium').innerHTML = 'Чуть-чуть сложно';
        document.getElementById('buttonHard').innerHTML = 'Сложно';
        document.getElementById('restart_question').innerHTML = 'Жаль, но вы проиграли. <br> Хотите попробовать еще?';
        document.getElementById('restart_button').innerHTML = 'Да хочу';
        document.getElementById('savescore-request-btn').innerHTML = 'Сохранить счет';
        document.getElementById('savescore-request-btn').style.fontSize = '1rem';
        document.getElementById('rate-button').innerHTML = 'Оценить игру';
        document.getElementById('scoreboard-title').innerHTML = 'Доска почета';
        document.getElementById('scoreboard-easy-title').innerHTML = 'Несложно';
        document.getElementById('scoreboard-normal-title').innerHTML = 'Чуть-чуть сложно';
        document.getElementById('scoreboard-hard-title').innerHTML = 'Сложно';
        document.getElementById('savescore-text').innerHTML = 'Представьтесь, чтобы сохранить счет';
        document.getElementById('savescore-final-btn').innerHTML = 'Сохранить';
        
        


        document.getElementById('modal2').style.opacity = '1';
    };
