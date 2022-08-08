    //difficulty variables
    let hookSpeed;
    let hookDelay;
    let hookChangeSpeed;
    let fishSpeed;
    let cornSpawnFrequency;
    
    let difficultyConfig = {
        'easy': {
            'hookSpeed' : 35,
            'hookDelay' : 400,
            'hookChangeSpeed' : 100,
            'fishSpeed' : 10,
            'cornSpeed' : 4,
            'cornSpawnFrequency' : 20,
            },
        'normal': {
            'hookSpeed' : 25,
            'hookDelay' : 300,
            'hookChangeSpeed' : 80,
            'fishSpeed' : 11,
            'cornSpeed' : 8,
            'cornSpawnFrequency' : 100,
            },
        'hard': {
            'hookSpeed' : 25,
            'hookDelay' : 100,
            'hookChangeSpeed' : 30,
            'fishSpeed' : 12,
            'cornSpeed' : 15,
            'cornSpawnFrequency' : 150,
            },
        }
    
function setDifficulty(difficulty) {
    difficultyChosen = difficulty;
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
