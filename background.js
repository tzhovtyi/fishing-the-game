
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

    function textHandler() {
        ctx.fillStyle = 'black';
        ctx.fillText(scoreWord + score, 1300, 40);
        ctx.fillText(youWord + fishWord, 1300, 80);
    }