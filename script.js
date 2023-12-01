

window.onload = function() {
  alert("Chaque joueur possède un score temporaire et un score global.\n \n À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite.\n\n Le résultat d’un lancer est ajouté au ROUND.\n\n Lors de son tour, le joueur peut décider à tout moment de:\n\n - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.\n  - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour./nLe premier joueur qui atteint les 100 points sur global gagne le jeu.\n\n Le Joueur 1 commence la partie! \n Bonne chance à vous!");
}


  let btnNew = document.querySelector('#btn-new');
  let btnHold = document.querySelector('#btn-hold');
  let btnRoll = document.querySelector('#btn-roll');
  let winning = document.querySelector('.winner span');
  let winContainer = document.getElementById('win-container');
  

  let dice_1 = document.getElementById('1');
  let dice_2 = document.getElementById('2');
  let dice_3 = document.getElementById('3');
  let dice_4 = document.getElementById('4');
  let dice_5 = document.getElementById('5');
  let dice_6 = document.getElementById('6');
  let dice_7 = document.getElementById('7');

  let player1 = document.getElementById('player1');
  let ptPlayer1 = document.getElementById('ptPlayer1');
  let player2 = document.getElementById('player2');
  let ptPlayer2 = document.getElementById('ptPlayer2');

  let roundP1 = document.getElementById('player1-score-round');
  let globalP1 = document.getElementById('player1-score-global');
  let roundP2 = document.getElementById('player2-score-round');
  let globalP2 = document.getElementById('player2-score-global');

  let currentScore = 0;
  let globalScoreP1 = 0;
  let globalScoreP2 = 0;
  let joueur = 'joueur1';





  function newGame() {
    joueur = 'joueur1';
    currentScore = 0;
    globalScoreP1 = 0;
    globalScoreP2 = 0;
    globalP1.textContent = 0;
    globalP2.textContent = 0;
    roundP1.textContent = 0;
    roundP2.textContent = 0;
    winContainer.classList.add('d-none');
  }

  function hold() {
    
    
    if (joueur == 'joueur2') {
      

      player1.style.fontWeight = '400'; 
      player1.style.color = 'black';

      ptPlayer1.style.color = 'rgba(221, 15, 15, 0.7)';
      
      player2.style.fontWeight = '200'; 
      player2.style.color = 'rgb(194, 194, 194)'; 

      ptPlayer2.style.color = 'white';


      globalScoreP2 +=  currentScore;
      console.log('currentScore',currentScore);
      console.log('P2',globalScoreP2);
      globalP2.textContent = globalScoreP2;
      roundP2.textContent = 0;
      if (globalScoreP2 >= 20) {
        winning.textContent = 2;        
        winContainer.classList.remove('d-none');
        console.log('win');
      }
      currentScore = 0;
      joueur = 'joueur1';
    }else{
      

      
    
      player1.style.fontWeight = '200'; 
      player1.style.color = 'rgb(194, 194, 194)';  
      
      ptPlayer1.style.color = 'whitesmoke';
  
      player2.style.fontWeight = '400'; 
      player2.style.color = 'black'; 
  
      ptPlayer2.style.color = 'rgba(221, 15, 15, 0.7)';
      
      globalScoreP1 +=  currentScore;
      console.log('currentScore',currentScore);
      console.log('P1',globalScoreP1);
      globalP1.textContent = globalScoreP1;
      roundP1.textContent = 0;
      if (globalScoreP1 >= 20) {
        winning.textContent = 1;        
        winContainer.classList.remove('d-none');
        console.log('win');
      }
      currentScore = 0;
      joueur = 'joueur2';
    }
  }

  function roll() {
    if (joueur == 'joueur1') {
      

      player1.style.fontWeight = '400'; 
      player1.style.color = 'black';

      ptPlayer1.style.color = 'rgba(221, 15, 15, 0.7)';
      
      player2.style.fontWeight = '200'; 
      player2.style.color = 'rgb(194, 194, 194)'; 

      ptPlayer2.style.color = 'white';
    }else{
      player1.style.fontWeight = '200'; 
      player1.style.color = 'rgb(194, 194, 194)';  
      
      ptPlayer1.style.color = 'whitesmoke';
  
      player2.style.fontWeight = '400'; 
      player2.style.color = 'black'; 
  
      ptPlayer2.style.color = 'rgba(221, 15, 15, 0.7)';
    }
    
    diceResult = Math.floor(Math.random() * 6) + 1;
    console.log('Roll:',diceResult);
    console.log(joueur);
    // Reset colors
    [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6, dice_7].forEach(dice => {
      dice.style.color = 'rgba(255, 255, 255)';
    });

    if (diceResult === 1) {   
      dice_4.style.color = 'rgba(221, 15, 15, 0.7)'; 
      currentScore = 0 
      hold();
    }
    else if (diceResult === 2) {   
      dice_1.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_7.style.color = 'rgba(221, 15, 15, 0.7)'; 
      currentScore += diceResult;      
    }
    else if (diceResult === 3) {   
      dice_1.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_4.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_7.style.color = 'rgba(221, 15, 15, 0.7)';  
      currentScore += diceResult;     
    }
    else if (diceResult === 4) {   
      dice_1.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_2.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_6.style.color = 'rgba(221, 15, 15, 0.7)'; 
      dice_7.style.color = 'rgba(221, 15, 15, 0.7)';  
      currentScore += diceResult;      
    }
    else if (diceResult === 5) {   
      dice_1.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_2.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_4.style.color = 'rgba(221, 15, 15, 0.7)'; 
      dice_6.style.color = 'rgba(221, 15, 15, 0.7)'; 
      dice_7.style.color = 'rgba(221, 15, 15, 0.7)';
      currentScore += diceResult;               
    }
    else if (diceResult === 6) {   
      dice_1.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_2.style.color = 'rgba(221, 15, 15, 0.7)';
      dice_3.style.color = 'rgba(221, 15, 15, 0.7)'; 
      dice_5.style.color = 'rgba(221, 15, 15, 0.7)'; 
      dice_6.style.color = 'rgba(221, 15, 15, 0.7)'; 
      dice_7.style.color = 'rgba(221, 15, 15, 0.7)';   
      currentScore += diceResult;     
    }

    if (joueur == 'joueur1') {
      roundP1.textContent = currentScore;
    }else{
      roundP2.textContent = currentScore;
    }
    
 
      
    return diceResult;

  }
  
  btnNew.addEventListener('click',newGame);
  btnHold.addEventListener('click',hold);
  btnRoll.addEventListener('click',roll);
};