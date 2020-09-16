import React from "react";
import "./../styles/Product.css";
import { useStateValue } from "./../ContextAPI/StateProvider";

function Product({ id, title, image, rating, price }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, title, image, rating, price },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star-rating">
                🌟
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
