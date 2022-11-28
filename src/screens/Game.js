import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// card images 
import rock from '../img/rock.png';
import scissors from '../img/scissors.png';
import paper from '../img/paper.png';

function Game() {

  // cards for user and ai
  let [cardImage, setCardImage] = useState([]);
  let [card2Image, setCard2Image] = useState([]);
  // assign value of cards distributed
  let [userVal, setUserVal] = useState(['']);
  let [user2Val, setUser2Val] = useState(['']);
  // number of cards distributed
  let [numCards, setNumCards] = useState(0);
  // user choice
  let [userChoice, setUserChoice] = useState('');
  let [user2Choice, setUser2Choice] = useState('');
  // health for user and comp
  let [userHealth, setUserHealth] = useState(10);
  let [user2Health, setUser2Health] = useState(10);
  // count rps -> user 1
  let [user1R, setUser1R] = useState(0);
  let [user1P, setUser1P] = useState(0);
  let [user1S, setUser1S] = useState(0);
  // count rps -> user 2
  let [user2R, setUser2R] = useState(0);
  let [user2P, setUser2P] = useState(0);
  let [user2S, setUser2S] = useState(0);
  // who won round
  let [winner, setWinner] = useState('');

  // set the states -> 5/6 cards for each
  const getCards = () => {
    for (let i = 0; i < 5; i++) {
      let rand = randomCards();
      let rand2 = randomCards();

      // USER
      if (rand === 1) {
        // user cards
        setCardImage([...cardImage, rock]);
        setUserVal([...userVal, 'rock']);
      } else if (rand === 2) {
        // user cards
        setCardImage([...cardImage, paper]);
        setUserVal([...userVal, 'paper']);
      } else if (rand === 3) {
        // user cards
        setCardImage([...cardImage, scissors]);
        setUserVal([...userVal, 'scissors']);
      }

      // COMPUTER
      if (rand2 === 1) {
        // user2 cards
        setCard2Image([...card2Image, rock]);
        setUser2Val([...user2Val, 'rock']);
      } else if (rand2 === 2) {
        // user2 cards
        setCard2Image([...card2Image, paper]);
        setUser2Val([...user2Val, 'paper']);
      } else if (rand2 === 3) {
        // user2 cards
        setCard2Image([...card2Image, scissors]);
        setUser2Val([...user2Val, 'scissors']);
      }
    }
  }

  // check for win
  const checkForWin = () => {

    // user 1 selection
    let userSelects = userChoice;
    let userChoice1 = countUser(userSelects);

    // user 2 selection 
    let user2Selects = user2Choice;
    let userChoice2 = countUser2(user2Selects);

    // game logic - r > s, s > p, p > r
    if ((user2Selects === 'rock' && userSelects === 'scissors') ||
      (user2Selects === 'paper' && userSelects === 'rock') ||
      (user2Selects === 'scissors' && userSelects === 'paper')) {
      setUserHealth(userHealth = userHealth - 1);
      setWinner(winner = "User 2 wins!");
      resetGame();
    }
    else if ((userSelects === 'rock' && user2Selects === 'scissors') ||
      (userSelects === 'paper' && user2Selects === 'rock') ||
      (userSelects === 'scissors' && user2Selects === 'paper')) {
      setUser2Health(user2Health = user2Health - 1);
      setWinner(winner = "user 1 wins!");
      resetGame();
    }
    else if (user2Selects === 'rock' && userSelects === 'rock') {
      if (user1R > user2R) {
        setUser2Health(user2Health = user2Health - 1);
        resetGame();
      } else if (user2R > user1R) {
        setUserHealth(userHealth = userHealth - 1);
        resetGame();
      } else {
        setUserHealth(userHealth = userHealth - 1);
        setUser2Health(user2Health = user2Health - 1);
        resetGame();
      }
    }
    else if (user2Selects === 'paper' && userSelects === 'paper') {
      if (user1P > user2P) {
        setUser2Health(user2Health = user2Health - 1);
        setWinner(winner = "User 1 wins!");
        resetGame();
      } else if (user2P > user1P) {
        setUserHealth(userHealth = userHealth - 1);
        setWinner(winner = "User 2 wins!");
        resetGame();
      } else {
        setUserHealth(userHealth = userHealth - 1);
        setUser2Health(user2Health = user2Health - 1);
        setWinner(winner = "Tie!");
        resetGame();
      }
    }
    else if (user2Selects === 'scissors' && userSelects === 'scissors') {
      if (user1S > user2S) {
        setUser2Health(user2Health = user2Health - 1);
        setWinner(winner = "User 1 wins!");
        resetGame();
      } else if (user2S > user1S) {
        setUserHealth(userHealth = userHealth - 1);
        setWinner(winner = "User 2 wins!");
        resetGame();
      } else {
        setUserHealth(userHealth = userHealth - 1);
        setUser2Health(user2Health = user2Health - 1);
        setWinner(winner = "Tie!");
        resetGame();
      }
    }

    // when health falls below 1
    if (user2Health < 1) {
      alert("User 2 wins!");
    } else if (userHealth < 1) {
      alert("user 1 wins!");
    }
  }

  // count number of cards per user choice 
  const countUser = (selection) => {
    let countR = 0, countS = 0, countP = 0;

    for (let i = 1; i < 5; i++) {
      if (userVal[i] === selection && selection === "rock") {
        countR += 1;
      } else if (userVal[i] === selection && selection === "paper") {
        countP += 1;
      } else if (userVal[i] === selection && selection === "scissors") {
        countS += 1;
      }
    }

    setUser1R(user1R = countR);
    setUser1P(user1P = countP);
    setUser1S(user1S = countS);

    return true;
  }

  // count number of cards per user 1 choice 
  const countUser2 = (selection) => {
    let countR = 0, countS = 0, countP = 0;

    for (let i = 1; i < 5; i++) {
      if (user2Val[i] === selection && selection === "rock") {
        countR += 1;
      } else if (user2Val[i] === selection && selection === "paper") {
        countP += 1;
      } else if (user2Val[i] === selection && selection === "scissors") {
        countS += 1;
      }
    }

    setUser2R(user2R = countR);
    setUser2P(user2P = countP);
    setUser2S(user2S = countS);

    return true;
  }


  // randomCards -> ensure atleast 1 type of each card
  const randomCards = () => {
    let rand = Math.floor(Math.random() * 3) + 1;
    return rand;
  }

  // on change event -> user selection 
  const onChangeSelection = (e) => {
    setUserChoice(userChoice = e.target.value);
  }
  // on change event -> user selection 
  const onChangeSelection2 = (e) => {
    setUser2Choice(user2Choice = e.target.value);
  }

  // reset Game
  const resetGame = () => {
    // reset the deck
    setCardImage(cardImage = []);
    setUserVal(userVal = ['']);
    setCard2Image(card2Image = []);
    setUser2Val(user2Val = ['']);
    
    // reset numbr of selected cards for user 1 and 2
    setUser2R(user2R = 0);
    setUser2P(user2P = 0);
    setUser2S(user2S = 0);

    setUser1R(user1R = 0);
    setUser1P(user1P = 0);
    setUser1S(user1S = 0);

    // reset maximum number of cards on deck
    setNumCards(numCards = 0);
  }

  return (
    <div className="App">
      <div className="game-wrapper">
        <div className='comp-cards'>
          <h3>User 2 - Health: {user2Health}</h3>
          <ul>
            {card2Image.map((card2Image, index) => (<img key={index} src={card2Image} />))}
          </ul>
          <div onChange={onChangeSelection2}>
            <input type="radio" id="rock" name="rps-selection2" value="rock" />
            <label htmlFor="rock">Rock</label>
            <input type="radio" id="paper" name="rps-selection2" value="paper" />
            <label htmlFor="paper">Paper</label>
            <input type="radio" id="scissors" name="rps-selection2" value="scissors" />
            <label htmlFor="scissors">Scissor</label>
          </div>
        </div>
        <br />
        <div className='user-cards'>
          <h3 id="user-title">User 1 - Health: {userHealth}</h3>
          <ul>
            {cardImage.map((cardImage, index) => (<img key={index} src={cardImage} />))}
          </ul>
          <div onChange={onChangeSelection}>
            <input type="radio" id="rock" name="rps-selection" value="rock" />
            <label htmlFor="rock">Rock</label>
            <input type="radio" id="paper" name="rps-selection" value="paper" />
            <label htmlFor="paper">Paper</label>
            <input type="radio" id="scissors" name="rps-selection" value="scissors" />
            <label htmlFor="scissors">Scissor</label>
          </div>
        </div>
      </div>
      <button onClick={
        () => {
          if (numCards < 5) {
            getCards();
          }
          setNumCards(numCards + 1);
        }
      }>Distribute Cards</button>
      <button onClick={() => checkForWin()}>Check</button>
      <Link to="/"><button>Main Page</button></Link>
      <h3>{winner}</h3>
    </div>
  );
}

export default Game;