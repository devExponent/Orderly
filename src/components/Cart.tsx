import { useContext } from "react";
import { FoodContext } from "../store/foodContext";
import Form from "./Form";

const Cart = () => {
  const {
    order,
    mealQuantity,
    IncreaseQty,
    DecreaseQty,
    totalPrice,
    closeCart,
    PlaceOrder,
    submitOrder,
  } = useContext(FoodContext);

  return (
    <div>
      {!submitOrder ? (
        <>
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
                <span className="w-4 text-center">
                  {mealQuantity[orders.id]}
                </span>
                <button
                  className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
                  onClick={() => IncreaseQty(orders.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <p className="font-extrabold text-2xl text-right my-5">
            ${totalPrice.toFixed(2)}
          </p>
          <div className="flex flex-row justify-end items-center gap-3 my-5">
            <button onClick={closeCart}>Close</button>
            <button
              className="bg-amber-300 p-2 rounded-lg"
              onClick={PlaceOrder}
            >
              Go to Checkout
            </button>
          </div>
        </>
      ) : (
        <Form />
      )}

      {/* {submitOrder && <p>Areaaaaaaaaaaaaa</p>} */}
    </div>
  );
};

export default Cart;
