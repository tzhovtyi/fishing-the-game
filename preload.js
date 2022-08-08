
//loading script 
const loadScreen = document.getElementById('loading-screen');
const loadBar = document.getElementById('loadbar');
let loadingProgress = 0;

function loadCallback() {
    loadingProgress += 17;
    loadBar.style.width = `${loadingProgress}%`;
    if (loadingProgress >= 100) {
        loadScreen.style.display = 'none';
    }
}

//creating cache
const cache = document.createElement("cache");
cache.style = "position:absolute;z-index:-1000;opacity:0;";
document.body.appendChild(cache);


Object.prototype.preloadImage = function() {
  cache.appendChild(this);
  this.onload = () => { 
      console.log('loaded' + this.src);
      cache.removeChild(this);
      loadCallback();
}}

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

const largePNGs = [background1, background2, background3, canvasCurtain, rulesRestartModal];

largePNGs.forEach(img => {
  img.preloadImage();
});


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
            // console.log(fpsData);
            hzRate = (Math.floor(fpsData/standartHzValue) || 1);
            // console.log(hzRate);
            loadCallback();
        }};

      checkFps();

      
