const ShopItem = props => {
    let { name, price, color, img } = props;
    return (
      <div className="shop-item">
        <div className="thumb">
          <figure>
            <img src={img} alt={name}/>
          </figure>
        </div>
        <div className="title">
          {name}
        </div>
        <div className="descolor">
          {color}
        </div>
        <div className="price">${price}</div>
        <button className="btn">
              Add to cart
        </button>
      </div>
    );
  };
  
  
  export default ShopItem;