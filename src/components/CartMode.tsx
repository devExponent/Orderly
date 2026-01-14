import Modal from "./Modal";
import Cart from "./Cart";
import { useContext } from "react";
import { FoodContext } from "../store/foodContext";

const CartMode = () => {
  const { cartModalRef } = useContext(FoodContext);
  return (
    <Modal ref={cartModalRef}>
      <Cart />
    </Modal>
  );
};

export default CartMode;
