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
