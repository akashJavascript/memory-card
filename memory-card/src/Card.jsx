import './Card.css';
import { useState } from 'react';
function Card({ imgUrl, desc, onClick, currScore, topScore }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (clicked === false) {
      currScore.setCurrScore(currScore.currScore + 1);
      if (currScore.currScore >= topScore.topScore) {
        topScore.setTopScore(currScore.currScore + 1);
      }
      setClicked(true);
    }
    if (clicked) {
      currScore.setCurrScore(0);
    }
    console.log(currScore.currScore);
    console.log(topScore.topScore);
    onClick();
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={imgUrl} alt="Random" />
      <p>{desc}</p>
    </div>
  );
}
export default Card;
