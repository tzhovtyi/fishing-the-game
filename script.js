    let deviceType = 'desktop';

    function checkDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            deviceType = "tablet";
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            deviceType = "mobile";
        }
    };
    checkDeviceType();

    
    
    //canvas setup
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d', { alpha: false });

    canvas.width = 1800;
    canvas.height = 825;
    const widthToHeightRatio = canvas.width/canvas.height;
    
    let pixelRatio = window.devicePixelRatio;
    let lowResAdaptRatio = 1;

    let adaptWidth = canvas.width/pixelRatio;
    let adaptHeight = canvas.height/pixelRatio;


    if (window.innerWidth < adaptWidth || window.innerHeight < adaptHeight || deviceType === 'mobile') {
        canvas.style.width = `${window.innerWidth * 0.95}px`;
        canvas.style.height = `${canvas.style.width/widthToHeightRatio}px`;
        lowResAdaptRatio = canvas.width/(window.innerWidth * 0.95);
        pixelRatio = 1;
    } else {
        canvas.style.width = `${adaptWidth}px`;
        canvas.style.height = `${adaptHeight}px`;
    }

    ctx.font = '35px Life';

    //mouse 
    const mouse = {
        x: canvas.width/2,
        y: canvas.height/2,
        click: false,
    }
    canvas.addEventListener('click', function(event) {
        if (iscaught == false) {
        mouse.x = event.offsetX * pixelRatio * lowResAdaptRatio;
        mouse.y = event.offsetY * pixelRatio * lowResAdaptRatio;}
    });

    //переменные мои переменные
    let gameFrame = 0;
    let score = 0;
    let level = 1;
    let iscaught = false;
    let background;
    let backgroundCounter = 0;
    let difficultyChosen;
    
    const hookWidth = 30;
    const hookHeight = 58;



    function showRules() {
        document.getElementById('modal_rules').style.display = "flex";
        document.getElementById('dark').style.display = "block";
    }

    function closeRules() {
        document.getElementById('modal_rules').style.display = "none";
        document.getElementById('dark').style.display = "none";
    }

    function requestSaveScore(){
        document.getElementById('savescore-dark').style.display = "flex";
        document.getElementById('savescore-main').style.display = "flex";
    }


// вызывется из функции spawncorn
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
            document.getElementById('restart_main').style.display = 'flex';
            setTimeout(()=> {if (gameFrame !== 0){document.getElementById('scoreboard-main').style.opacity = '1';}}, 700);
        }
    }

    function restart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('canvasCurtain').style.display = 'block';
        document.getElementById('dark').style.display = "none";
        document.getElementById('restart_main').style.display = 'none';
        document.getElementById('scoreboard-main').style.opacity = '0';
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
        // console.log(gameFrame);
        if (iscaught == false) {
        requestAnimationFrame(main);
        } 
    }
                                                      