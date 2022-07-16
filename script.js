
//loading script 
const loadScreen = document.getElementById('loading-screen');
const loadBar = document.getElementById('loadbar');
let loadingProgress = 0;

//creating cache
const cache = document.createElement("cache");
cache.style = "position:absolute;z-index:-1000;opacity:0;";
document.body.appendChild(cache);

function preloadImage(img) {
    cache.appendChild(img);
    img.onload = () => { 
        console.log('loaded' + img.src);
        cache.removeChild(img);
        loadCallback();
    }
}

function loadCallback() {
    loadingProgress += 17;
    loadBar.style.width = `${loadingProgress}%`;
    if (loadingProgress >= 100) {
        loadScreen.style.display = 'none';
    }
}

const background1 = new Image();
background1.src = 'textures/background1.png';
const background2 = new Image();
background2.src = 'textures/background2.png';
const background3 = new Image();
background3.src = 'textures/background3.png';
const background4 = background2;
const canvasCurtain = new Image();
canvasCurtain.src = 'textures/canvas_background.png'
const rulesRestartModal = new Image();
rulesRestartModal.src = 'textures/button6.png';

preloadImage(background1);
preloadImage(background2);
preloadImage(background3);
preloadImage(canvasCurtain);
preloadImage(rulesRestartModal); 

//determinig Hz monitor type
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame;
      }
    let hzRate = 1;
    const standartHzValue = 60;
    let fpsData;

    let fpsArr = [];
      let t = [];
      function checkFps(now) {
        t.unshift(now);
        if (t.length > 10) {
          let t0 = t.pop();
          let fps = Math.floor(1000 * 10 / (now - t0));
          fpsArr.push(fps);
        }
        if (fpsArr.length < 100) {window.requestAnimationFrame(checkFps);
        } else {
            fpsData = Math.floor((fpsArr.splice(49, 50).reduce((a, b) => a + b, 0)/50));
            console.log(fpsData);
            hzRate = fpsData/standartHzValue;
            loadCallback();
        }};

      checkFps();



    //canvas setup
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d', { alpha: false });

    canvas.width = 1800;
    canvas.height = 825;
    
    const pixelRatio = window.devicePixelRatio;

    canvas.style.width = `${canvas.width/pixelRatio}px`;
    canvas.style.height = `${canvas.height/pixelRatio}px`;
    
    ctx.font = '35px Life';

    //переменные мои переменные
    let gameFrame = 0;
    let score = 0;
    let level = 1;
    let iscaught = false;
    let background;
    let backgroundCounter = 0;


    //player textures
    const playerLeft = new Image();
    playerLeft.src = "textures/fish_1.png";
    const playerRight = new Image();
    playerRight.src = "textures/fish_2.png";

    const player2Left = new Image();
    player2Left.src = "textures/fish_3.png";
    const player2Right = new Image();
    player2Right.src = "textures/fish_4.png";

    const player3Left = new Image();
    player3Left.src = "textures/fish_5.png";
    const player3Right = new Image();
    player3Right.src = "textures/fish_6.png";

    const player4Left = new Image();
    player4Left.src = "textures/fish_7.png";
    const player4Right = new Image();
    player4Right.src = "textures/fish_8.png";

    const player5Left = new Image();
    player5Left.src = "textures/fish_9.png";
    const player5Right = new Image();
    player5Right.src = "textures/fish_10.png";

    const player6Left = new Image();
    player6Left.src = "textures/fish_11.png";
    const player6Right = new Image();
    player6Right.src = "textures/fish_12.png";
    
    const levelConfig = {
                1: {imageLeft: playerLeft,
                    imageRight: playerRight,
                    dx1: - 18,
                    dy1: - 26,
                    dx2: - 18,
                    dy2: - 35,
                    },
                
                2: {imageLeft: player2Left,
                    imageRight: player2Right,
                    dx1: - 24,
                    dy1: - 54,
                    dx2: - 25,
                    dy2: - 50,
                    },
                
               3: {imageLeft: player3Left,
                   imageRight: player3Right,
                   dx1: - 28,
                   dy1: - 58,
                   dx2: - 28,
                   dy2: - 65,
                   },
                
                4: {imageLeft: player4Left,
                   imageRight: player4Right,
                   dx1: - 28,
                   dy1: - 30,
                   dx2: - 28,
                   dy2: - 30,
                   },
                5: {imageLeft: player5Left,
                   imageRight: player5Right,
                   dx1: - 28,
                   dy1: - 30,
                   dx2: - 28,
                   dy2: - 30,
                   },    
                6: {imageLeft: player6Left,
                   imageRight: player6Right,
                   dx1: - 28,
                   dy1: - 30,
                   dx2: - 28,
                   dy2: - 30,
                   },   
            }


//difficulty variables
    let hookSpeed;
    let hookDelay;
    let hookChangeSpeed;
    let fishSpeed;
    let cornSpawnFrequency;

    const hookWidth = 30;
    const hookHeight = 58;

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
        document.getElementById('modal2_middle').innerHTML = 'Choose the difficulty';
        document.getElementById('buttonEasy').innerHTML = 'Easy';
        document.getElementById('buttonMedium').innerHTML = 'Meidum';
        document.getElementById('buttonHard').innerHTML = 'Hard';
        document.getElementById('restart_question').innerHTML = 'You have lost. <br> Wanna play again?';
        document.getElementById('restart_button').innerHTML = 'Restart';
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
        document.getElementById('modal2').style.opacity = '1';
    };

    function showRules() {
        document.getElementById('modal_rules').style.display = "flex";
        document.getElementById('dark').style.display = "block";
    }

    function closeRules() {
        document.getElementById('modal_rules').style.display = "none";
        document.getElementById('dark').style.display = "none";
    }


    let difficultyConfig = {
            'easy': {
                'hookSpeed' : 35,
                'hookDelay' : 800,
                'hookChangeSpeed' : 100,
                'fishSpeed' : 10,
                'cornSpeed' : 4,
                'cornSpawnFrequency' : 20,
                },
            'medium': {
                'hookSpeed' : 25,
                'hookDelay' : 400,
                'hookChangeSpeed' : 80,
                'fishSpeed' : 11,
                'cornSpeed' : 8,
                'cornSpawnFrequency' : 100,
                },
            'hard': {
                'hookSpeed' : 25,
                'hookDelay' : 1,
                'hookChangeSpeed' : 30,
                'fishSpeed' : 12,
                'cornSpeed' : 15,
                'cornSpawnFrequency' : 150,
                },
            }
        
    function setDifficulty(difficulty) {
        hookSpeed = difficultyConfig[difficulty]['hookSpeed']*hzRate;
        hookDelay = difficultyConfig[difficulty]['hookDelay']*hzRate;
        hookChangeSpeed = difficultyConfig[difficulty]['hookChangeSpeed']*hzRate;
        fishSpeed = difficultyConfig[difficulty]['fishSpeed']*hzRate;
        cornSpeed = difficultyConfig[difficulty]['cornSpeed']*hzRate;
        cornSpawnFrequency = difficultyConfig[difficulty]['cornSpawnFrequency']*hzRate;
        document.getElementById('modal2').style.display = 'none';
        document.getElementById('canvasCurtain').style.display = 'none';
        main();
    }


//mouse 
    const mouse = {
        x: canvas.width/2,
        y: canvas.height/2,
        click: false,
    }
    canvas.addEventListener('click', function(event) {
        if (iscaught == false) {
        mouse.x = event.offsetX * pixelRatio;
        mouse.y = event.offsetY * pixelRatio;}
    });

    
function handleBackground() {
    if (gameFrame % 50*hzRate == 0) {backgroundCounter++};
    if (backgroundCounter > 3) {backgroundCounter = 0};
    switch (backgroundCounter) {
        case 0: 
            background = background1;
            break;
        case 1:
            background = background2;
            break;
        case 2:
            background = background3;
            break;
        case 3:
            background = background4;
                break;
        }
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

    const hookRandCoordinates = {
        x: 750,
        y: 270
    }

    const hook1 = new Image();
    hook1.src = "textures/hook.png";

    class Hook {
        constructor() {
            this.x = 750;
            this.y = 270;
            this.radius = 15;
            this.distance;
            this.counted = false;
        }
        update() {
        //сравнивает положение крючка с рандомно сгенерированными координатами
        //если не совпадает, двигает крючок к ним
        const dx = this.x - hookRandCoordinates.x;
        const dy = this.y - hookRandCoordinates.y;
        if (hookRandCoordinates.x != this.x) {
            this.x-= dx/hookSpeed;
            }
        if (hookRandCoordinates.y != this.y) {
            this.y-= dy/hookSpeed;
            }
        //рассчитывает расстояние от крючка до игрока 
            const ddx = this.x - player.x;
            const ddy = this.y - player.y;
            this.distance = Math.sqrt(ddx*ddx + ddy*ddy);
        }
        draw() {
        //непосредственно рисует крючок без лески
            // ctx.fillStyle = 'red';
            // ctx.beginPath();
            // ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2 );
            // ctx.fill();
            // ctx.closePath();
            // ctx.stroke();
            ctx.drawImage(hook1, this.x - 15, this.y - 40, hookWidth, hookHeight);
        }
    }
const hook = new Hook();

//рисует леску к крючку
function drawLeska() {
    ctx.lineWidth = 0.2;
    ctx.beginPath();
    ctx.moveTo(573, 5);
    ctx.lineTo(hook.x + 10, hook.y - 35);
    ctx.stroke();
    ctx.closePath();
}

    function handleHook() {
    //меняет координаты для крючка
    if (gameFrame > hookDelay && gameFrame % hookChangeSpeed == 0) {
        hookRandCoordinates.x = Math.floor(Math.random() * canvas.width);
        hookRandCoordinates.y = Math.floor(Math.random() * 460 + 300);
        //y coord.: MAX = 760, MIN: 300
    }
    //двигаем крючок если нужно
    hook.update();
    //рисуем крючок каждый фрейм
    hook.draw();
    drawLeska();
    //collision detection
    if (hook.distance < hook.radius + player.radius && !hook.counted) {
        hook.counted = true;
        iscaught = true;
        // console.log("попался нахуй");
        caught();
    }
    }


    class Player {
        constructor() {
            this.x = canvas.width/2;
            this.y =  canvas.height/2;
            this.radius = 15;
            this.angle = 0; 
        }
        //двигает координаты рыбы чуть ближе к месту клика если они не совпадают
        update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        let theta = Math.atan2(dy, dx);
        this.angle = theta;
        if (mouse.x != this.x) {
            this.x-= dx/fishSpeed;
            }
        //здесь разветвление логики
        //чтобы рыба поплыла по вертикали она должна быть не выше 100 по у
        //но я добавил || чтобы она могла все же поплыть вниз с этой точки и не застрять 
        if (mouse.y != this.y && (this.y > 250 || mouse.y > 250) && (this.y < 760 || mouse.y < 760)) {
            this.y-= dy/fishSpeed;
            }
        }
            //рисует рыбу на измененных координатах
        draw() {
            // ctx.fillStyle = 'green';
            // ctx.beginPath();
            // ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2 );
            // ctx.fill();
            // ctx.closePath();
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);

            ctx.drawImage(levelConfig[level][(this.x >= mouse.x ? 'imageLeft' : 'imageRight')],
                levelConfig[level][(this.x >= mouse.x ? 'dx1' : 'dx2')],
                levelConfig[level][(this.x >= mouse.x ? 'dy1' : 'dy2')]);
            ctx.restore();
        }
        //end draw
    }
    const player = new Player();


//  corn generator + collision handler 
    const cornArray = [];
    class Corn {
        constructor() {
            this.x = Math.floor(Math.random() * canvas.width);
            this.y = 260;
            this.speed = Math.floor((Math.random() * 8 + 1)*hzRate);
            this.radius = 10;
            this.distance;
            this.counted = false;
        }
        update() {
            this.y += this.speed;
            const dx = this.x - player.x;
            const dy = this.y - player.y;
            this.distance = Math.sqrt(dx*dx + dy*dy);
        }
        draw() {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2 );
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }
    }

    function spawnCorn(){
        //generate new cornpiece every x frames
        if (gameFrame % cornSpawnFrequency == 0) {
            cornArray.push(new Corn());
        }
        //iterating through the array of objects to make em move
        for (let i = 0; i < cornArray.length; i++) {
            cornArray[i].update();
            cornArray[i].draw();
         //removing the old ones from the array а то память засрется через минуту игры уже 
            if (cornArray[i].y > 780) {
                cornArray.splice(i, 1);
                i--;
            }
        }
        //collision detection 
        for (let i = 0; i < cornArray.length; i++) {
            if (cornArray[i].distance < cornArray[i].radius + player.radius && !cornArray[i].counted) {
            cornArray[i].counted = true;
            score++;
            cornArray.splice(i, 1);
            i--;
            levelControl();
            }
        }     
    }


    function textHandler() {
        ctx.fillStyle = 'black';
        ctx.fillText(scoreWord + score, 1300, 40);
        ctx.fillText(youWord + fishWord, 1300, 80);
    }


//чтобы он не лупился каждый фрейм, эта функция вызывается только при прибалвении очка 
//а значит она вызывется из функции spawncorn
    function levelControl() {
        if (score > 5) {
            player.radius = 20;
            level = 2;
            fishWord = fish2;
        }
        if (score > 10) {
            player.radius = 25;
            level = 3;
            fishWord = fish3;
        } 
        if (score > 15) {
            player.radius = 25;
            level = 4;
            fishWord = fish4;
        } 
        if (score > 20) {
            player.radius = 25;
            level = 5;
            fishWord = fish5;
        }
        if (score > 25) {
            player.radius = 25;
            level = 6;
            fishWord = fish6;
        }
    }

    function caught() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleBackground();
        hookRandCoordinates.x = 750;
        hookRandCoordinates.y = 270;
        hookSpeed = 80*hzRate;
        fishSpeed = 80*hzRate;
        hook.update();
        hook.draw();
        player.update();
        player.draw();
        drawLeska();
        mouse.x = 750;
        mouse.y = 270;
        textHandler();
        gameFrame++;
        if ((player.x > 755 || player.x < 745) && (player.y > 275)) {
            requestAnimationFrame(caught);
        } else {
            document.getElementById('dark').style.display = "block";
            document.getElementById('restart_').style.display = 'flex';
            }
    }

    function restart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('canvasCurtain').style.display = 'block';
        document.getElementById('dark').style.display = "none";
        document.getElementById('restart_').style.display = 'none';
        document.getElementById('modal2').style.display = 'flex';
        hook.x = 750;
        hook.y = 270;
        gameFrame = 0;
        score = 0;
        level = 1;
        iscaught = false;
        fishWord = fish1;
        backgroundCounter = 0;
        hook.counted = false;
        hook.speed = 30;
        player.x = canvas.width/2;
        player.y =  canvas.height/2;
        player.speed = 10;
        mouse.x = canvas.width/2;
        mouse.y = canvas.height/2;
    }

    function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleBackground();
        player.update();
        player.draw();
        handleHook();
        spawnCorn();
        textHandler();
        gameFrame++;
        if (iscaught == false) {
        requestAnimationFrame(main);
        } 
    }
                                                      