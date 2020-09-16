import React from "react";
import "./../styles/Checkout.css";
import { useStateValue } from "./../ContextAPI/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="check-out ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is Empty</h2>
            <p>
              You have no item in your basket, To buy one or more items, click
              "Add to basket" below the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {/* list out all of the checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && <Subtotal />}
    </div>
  );
}

export default Checkout;
