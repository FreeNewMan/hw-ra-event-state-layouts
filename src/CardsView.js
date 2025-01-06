import ShopCard from './ShopCard.js';

const CardsView = (props) => {
    const { cards } = props;
  
    return (
      <div className="cards">
        {
          cards.map((card, i) => {
            return (
              <ShopCard key={`card-${i}`} name={card.name} price={card.price} color={card.color} img={card.img} />
            );
          })
        }
      </div>
    );
  };
  
  export default CardsView;