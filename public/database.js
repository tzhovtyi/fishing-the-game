const firebaseConfig = {
    apiKey: "AIzaSyDte4vzA__yZ3IqKN0naZH3BZFfs3tWad0",
    authDomain: "fishing-the-game.firebaseapp.com",
    databaseURL: "https://fishing-the-game-default-rtdb.firebaseio.com",
    projectId: "fishing-the-game",
    storageBucket: "fishing-the-game.appspot.com",
    messagingSenderId: "170580747083",
    appId: "1:170580747083:web:d38b3bf694ee9d770b7ece"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  console.log(firebase);
 

//gets data form the firebase
  Array.prototype.sortByScore = function() {
      return this.sort(function(a,b) {
          let x = a['score']; let y = b['score'];
          return((y<x) ? -1 : ((y>x) ? 1 : 0));
      })
  }

  const scoreboardEasy = document.querySelector('#scoreboard-easy');
  const scoreboardNormal = document.querySelector('#scoreboard-normal');
  const scoreboardHard = document.querySelector('#scoreboard-hard');
  let easyUnsorted = [];
  let normalUnsorted = [];
  let hardUnsorted = [];
 
  //listening to changes in database
  db.ref('/users').on('value', (snapshot) => {
      let dataArr = [];
      snapshot.forEach((element)=> {
      dataArr.push(element.val());
      })
      console.log(dataArr);
      sortByDifficulty(dataArr);
      printScores(easyUnsorted, scoreboardEasy);
      printScores(normalUnsorted, scoreboardNormal);
      printScores(hardUnsorted, scoreboardHard);
  })

 function sortByDifficulty(a) {
      easyUnsorted = [];
      normalUnsorted = [];
      hardUnsorted = [];
      for (let i=0; i<a.length; i++) {
          if (a[i]['difficulty'] == 'easy') {easyUnsorted.push(a[i]);}
          if (a[i]['difficulty'] == 'normal') {normalUnsorted.push(a[i]);}
          if (a[i]['difficulty'] == 'hard') {hardUnsorted.push(a[i]);}
        }
    }

  function printScores(difArr, parentDiv){ 
      parentDiv.innerHTML = '';
      let arr = difArr.sortByScore().splice(0, 9);
      console.log(arr);
      for (i=0; i<arr.length; i++) {
          let line = document.createElement('div');
          line.classList.add('scoreboard-line');
          parentDiv.appendChild(line);
          let nameContainer = document.createElement('div');
          nameContainer.innerText = arr[i]['name'];
          line.appendChild(nameContainer);
          let scoreContainer = document.createElement('div');
          scoreContainer.innerText = arr[i]['score'];
          line.appendChild(scoreContainer);
      }
 }

//writes data to the database

    const saveScoreFinalBtn = document.getElementById('savescore-final-btn');

    saveScoreFinalBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        let newUserKey = db.ref().child('users').push().key;
        let name = document.querySelector("#name").value;
        if (!name) name = 'аноним';
        db.ref('/users/'+newUserKey).set({
                 name: name,
                 difficulty: difficultyChosen,
                 score: score
            })
        deepDark();
        document.getElementById('savescore-main').style.display = "none";
    })

function submitReview(textAreaID, modalID){
    let newUserKey = db.ref().child('reviews').push().key;
    let review = document.getElementById(textAreaID).value;
    db.ref('/reviews/'+newUserKey).set({
             review: review,
        })
    deepDark();
    document.getElementById(modalID).style.display = 'none';
}


