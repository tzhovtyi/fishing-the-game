
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
