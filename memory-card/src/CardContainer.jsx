import Card from './Card';
import './CardContainer.css';
function CardContainer({images, onCardClick,currScore,topScore}) {
  return (
    <div className='card-container'>
      {images.map(image => (
        <Card key={image.url} imgUrl={image.url} desc={image.desc} onClick={onCardClick} currScore={currScore} topScore={topScore}></Card>
      ))}
    </div>
  );
}
export default CardContainer;
