const cornArray = [];
class Corn {
    constructor() {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = 260;
        this.speed = (Math.random() * 8 + 1);
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
        if (!won) levelControl();
        }
    }     
}
