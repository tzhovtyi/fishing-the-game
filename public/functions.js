function pause() {
    isOnPause = true;
    dark();
}

function unpause() {
    isOnPause = false;
    dark();
    main();
}

function dark() {
    if (!isDark) {
        document.getElementById('dark').style.display = "block";
        isDark = true;
    } else {
        document.getElementById('dark').style.display = "none";
        isDark = false;
    }
}

function deepDark() {
    if (!isDeepDark) {
        document.getElementById('savescore-dark').style.display = "flex";
        isDeepDark = true;
    } else {
        document.getElementById('savescore-dark').style.display = "none";
        isDeepDark = false;
    }
}

function showRules() {
    document.getElementById('modal_rules').style.display = "flex";
    dark();
}

function closeRules() {
    document.getElementById('modal_rules').style.display = "none";
    dark();
}

function requestSaveScore(){
    deepDark();
    document.getElementById('savescore-main').style.display = "flex";
}

function requestRate() {
    deepDark();
    document.querySelector('#rate-main').style.display = 'flex';
}

document.querySelector('#rate-button-good').addEventListener('click', ()=>{
    document.querySelector('#rate-main').style.display = 'none';
    document.querySelector('#rate-good-main').style.display = 'flex';
})

document.querySelector('#rate-button-bad').addEventListener('click', ()=>{
    document.querySelector('#rate-main').style.display = 'none';
    document.querySelector('#rate-bad-main').style.display = 'flex';
    // fetch('http://ip-api.com/json').then(r => r.json())
    // .then(data => ipDataSortPrint(data))
    // .catch(e => console.log("Booo"));
})

//  THIS PART WAS INTENDED AS A JOKE, IT'S ONLY WORKING ON HTTP AND NOT HTTPS

// function ipDataSortPrint(data) {
//     let information = {
//         lat: data.lat,
//         lon: data.lon,
//         country: data.country,
//         region: data.regionName,
//         city: data.city,
//         IP: data.query,
//         zip: data.zip  
//     };
//     if (language == 'en' && !ipPrinted) {
//         document.querySelector('#rate-bad-text').innerHTML += `However, your IP is: <br> ${JSON.stringify(information, null, 2)}`;
//         ipPrinted = true; }
//    if (language == 'ru' && !ipPrinted) {
//         document.querySelector('#rate-bad-text').innerHTML += `Однако, вот твой айпи, сука: <br> ${JSON.stringify(information, null, 2)}`;
//         ipPrinted = true;
//     }
// }

fishOptions = document.querySelectorAll('.fish-choice');
fishOptions.forEach(item => {
    item.addEventListener('click', (event)=> {
        document.getElementById('win-main').style.display = 'none';
        unpause();
        level = event.currentTarget.attributes.fishN.value;
        fishWord = dictionary['fish'+String(level)];
    })
})

function win() {
    pause();
    won = true;
    document.getElementById('win-main').style.display = 'flex';
}

