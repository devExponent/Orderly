import { useContext } from "react";
import { FoodContext } from "../store/foodContext";

const Cart = () => {
  const { order, mealQuantity, IncreaseQty, DecreaseQty } =
    useContext(FoodContext);

  return (
    <div>
      {order.map((orders) => (
        <div
          className="flex items-center justify-between py-2 border-b last:border-b-0"
          key={orders.id}
        >
          <div className="flex flex-col">
            <p className="font-medium flex gap-3">
              {orders.name}
              <span>* {mealQuantity[orders.id]}</span>
            </p>
            <p className="text-gray-500">${orders.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => DecreaseQty(orders.id)}
            >
              -
            </button>
            <span className="w-4 text-center">{mealQuantity[orders.id]}</span>
            <button
              className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => IncreaseQty(orders.id)}
            >
              +
            </button>
            <p>{mealQuantity[orders.id] * orders.price}</p>
          </div>
        </div>
      ))}
      <div className="flex flex-row justify-end items-center gap-3 my-5">
        <button>Close</button>
        <button className="bg-amber-300 p-2 rounded-lg">Go to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
