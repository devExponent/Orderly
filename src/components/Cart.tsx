import { useContext } from "react";
import { FoodContext } from "../store/foodContext";
import Form from "./Form";
import CartItems from "./CartItems";
import Success from "./Success";

const Cart = () => {
  const { submitOrder, orderSuccessMessage } = useContext(FoodContext);

  return (
    <div>
      {orderSuccessMessage ? (
        <Success />
      ) : !submitOrder ? (
        <CartItems />
      ) : (
        <Form />
      )}
    </div>
  );
};

export default Cart;
