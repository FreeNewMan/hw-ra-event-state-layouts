const ShopCard = props => {
    const { name, price, color, img} = props;
 
    return (
      <div className="shop-card">
        <div className="title">
          {name}
        </div>
        <div className="descolor">
          {color}
        </div>
        <div className="slider">
          <figure>
              <img src={img} alt={name}/>
          </figure>
        </div>
        <div className="cta">
          <div className="price">${price}</div>
            <button className="btn">
              Add to cart
            </button>
        </div>
      </div>
    );
  };

  export default ShopCard;