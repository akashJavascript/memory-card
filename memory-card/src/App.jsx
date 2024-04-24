import { useState, useEffect } from 'react';
import './App.css';
import CardContainer from './CardContainer';

async function fetchData(setImages) {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=6AiPgCxW7pXuUD1fqLVGTv2zqRG5TYjDjOFknRWC87I&count=10'
  );
  const data = await response.json();
  console.log(data);
  setImages(
    data.map(img => ({
      url: img.urls.regular,
      desc: img.alt_description,
    }))
  );
}

function shuffleArray(array) { //Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function App() {
  const [images, setImages] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  useEffect(() => {
    fetchData(setImages); 
  }, []);

  const handleCardClick = () => {
    setImages(prevImages => shuffleArray([...prevImages]));
  };
  return (
    <div className='app'>
      <h1>Memory Card Game</h1>
      <h2>Current Score: {currScore}</h2>
      <h2>Top Score: {topScore}</h2>
      
      <CardContainer images={images} onCardClick={handleCardClick} currScore={{currScore,setCurrScore}} topScore={{topScore,setTopScore}}></CardContainer> 
    </div>
  );
}

export default App;
