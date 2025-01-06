import ShopItem from './ShopItem.js';

const ListView = props => {
    const {items} = props;
  

    return (
      <div className="list">
        {
          items.map((item, i) => {
            return (
              <ShopItem key={`item-${i}`} name={item.name} price={item.price} color={item.color} img={item.img} />
            );
          })
        }
      </div>
    );
  };
  
  export default ListView;

